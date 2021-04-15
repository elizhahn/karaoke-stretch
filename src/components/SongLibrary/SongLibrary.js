import { React, Component } from 'react';
import SongCard from '../SongCard/SongCard';
import '../SongLibrary/SongLibrary.css'
import SearchBar from "../SearchBar/SearchBar";



class SongLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      renderedSongs: []    
    }
  }

 
   searchForSongs = (searchQuery) => {
    let modifiedSearchQuery = searchQuery.toUpperCase();
    let matchingSongs = this.props.songs.filter(song => song.title.toUpperCase().includes(modifiedSearchQuery)
    // || song.genres.toString().toUpperCase().includes(modifiedSearchQuery)
    || song.artist.toUpperCase().includes(modifiedSearchQuery)
    )
    this.setState({ renderedSongs: matchingSongs })
  }

  createSongCards = () => {
    let songList; 
    if( this.state.renderedSongs.length) {
      songList = this.state.renderedSongs
    } else {
      songList = this.props.songs
    }
    const allSongs = songList.map(song => {
      return (
        <SongCard
        key={ song.id }
        id={ song.id }
        title={ song.title_title }
        artist={ song.artist }
        genres={ song.genres }
        album_cover={ song.album_cover }
        handleSong={ this.props.handleSong }
        buttonIcon={ this.props.buttonIcon }
        />
      );
    });
   return allSongs

  }

  render() {
    const allSongs = this.createSongCards()
    return (
      <div className='library'>
        <SearchBar searchForSongs={this.searchForSongs} />
         {allSongs}
      </div>
    )
  }
}

export default SongLibrary;
