import { React, Component } from 'react';
import '../SongCard/SongCard.scss';
import Lyric from '../Lyric/Lyric';
import { GiMicrophone } from "react-icons/gi"
import { fetchLyrics } from "../../APICalls";
import { formatLyrics } from '../../utility';

class SongCard extends Component {
  constructor(props) {
  super(props)
  this.state = {
    lyrics: {},
    error: ''
  }
}

getLyrics = (artist, songtitle) => {
  fetchLyrics(artist, songtitle)
  .then(data => {
    const formattedLyrics = formatLyrics(data, songtitle);
    this.setState({ lyrics: formattedLyrics });
  })
  .catch(error => this.setState({ error: "Lyrics unavailable" }));
}

closeLyrics = () => {
  this.setState({ lyrics: {}, error: '' });
}

render() {
  const { id, title, artist, genres, album_cover, handleSong, buttonIcon, isActive } = this.props;
  const listItems = genres.map(genre => {
    return (
      <li className="genre" key={ `${title}-${genre}` } >{ genre }</li>
    );
  });

  return (
      <div className='song-card' data-cy="song-card">
        <img src={ album_cover } data-cy="album-img" alt={ `${title} by ${artist} album cover art` }/>
        <article className="song-details">
          <h2>{ title }</h2>
          <p>Artist: { artist }</p>
          <ul className="genres">
            { listItems }
          </ul>
        </article>
        <button className="handle-song-btn" aria-label='add to favorites button' disabled={ !isActive } id={ id } onClick={ () => handleSong(id) } data-cy="song-card-btn">{ isActive ? buttonIcon[0] : buttonIcon[1] }</button>
        <button className=" handle-song-btn lyrics-btn" onClick={() => this.getLyrics(artist, title)}>{ <GiMicrophone className="handle-song-icon" aria-label='see lyrics button' data-cy="microphone-icon"/> }</button>
        { !!Object.keys(this.state.lyrics).length && <Lyric lyrics={ this.state.lyrics } closeLyrics={ this.closeLyrics } error={ this.state.error }/> }
        { this.state.error && <Lyric lyrics={ this.state.lyrics } closeLyrics={ this.closeLyrics } error={ this.state.error }/> }
      </div>

  );
 };
}

export default SongCard;

SongCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  album_cover: PropTypes.string.isRequired,
  handleSong: PropTypes.func.isRequired,
  buttonIcon: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired
};
