import { React, Component } from 'react';
import SongCard from '../SongCard/SongCard';
import SearchBar from "../SearchBar/SearchBar";
import '../SongLibrary/SongLibrary.scss';



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
    || song.genres.toString().toUpperCase().includes(modifiedSearchQuery)
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
      let isActive = true;
      if(this.props.mySongs.includes(song)) {
        isActive = false; 
      } 
      return (
        <SongCard
        key={ song.id }
        id={ song.id }
        title={ song.title }
        artist={ song.artist }
        genres={ song.genres }
        album_cover={ song.album_cover }
        handleSong={ this.props.handleSong }
        buttonIcon={ this.props.buttonIcon }
        isActive={isActive}
        />
      );
    });
   return allSongs
  }

  render() {
    const allSongs = this.createSongCards()
    return (
      <>
        <SearchBar searchForSongs={this.searchForSongs} />
        <div className='library'>
          {allSongs}
        </div>
      </>
    )
  }
}

export default SongLibrary;