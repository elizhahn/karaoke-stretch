import { React, Component } from 'react';
import '../SongCard/SongCard.scss'


class SongCard extends Component {
  constructor(props) {
  super(props)
  this.state = {
    lyrics: {}
  }
}

getLyrics = (artist, songtitle) => {
  console.log('test')
  fetch(`https://api.lyrics.ovh/v1/${artist}/${songtitle}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({lyrics: data.lyrics})
  })
  .catch(error => this.setState({error: error.message}))
}

render() {
  const { id, title, artist, genres, album_cover, handleSong, buttonIcon, isActive } = this.props
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
      <button className={"handle-song-btn"} disabled={!isActive} id={id} onClick={() => handleSong(id)} data-cy="song-card-btn">{ isActive ? buttonIcon[0] : buttonIcon[1]}</button>
      <button onClick={() => this.getLyrics(artist, title)}>Get Lyrics</button>
    </div>
  );
 };
}

export default SongCard;
