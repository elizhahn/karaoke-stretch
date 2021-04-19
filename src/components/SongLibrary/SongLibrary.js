import { React, Component } from 'react';
import SongCard from '../SongCard/SongCard';
import SearchBar from "../SearchBar/SearchBar";
import '../SongLibrary/SongLibrary.scss';



class SongLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderedSongs: [],
      searchResultsMsg: ""
    }
  }

   searchForSongs = (searchQuery) => {
     if (!searchQuery) {
       this.setState({ renderedSongs: this.props.songs, searchResultsMsg: "" })
     } else {
       let modifiedSearchQuery = searchQuery.toUpperCase();
       let matchingSongs = this.props.songs.filter(song => song.title.toUpperCase().includes(modifiedSearchQuery)
          || song.genres.toString().toUpperCase().includes(modifiedSearchQuery)
          || song.artist.toUpperCase().includes(modifiedSearchQuery));

       if (matchingSongs.length) {
         this.setState({ searchResultsMsg: `Showing results for '${searchQuery.toLowerCase()}':`, renderedSongs: matchingSongs })
       } else {
         this.setState({ searchResultsMsg: "No results for this search. Time to freestyle! (Or try another search 😉)", renderedSongs: [] })
       };

     };
  }

  createSongCards = () => {
    let songList;
    if(this.state.searchResultsMsg) {
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
        <h2 data-cy="search-msg">{this.state.searchResultsMsg}</h2>
        <div className='library'>
          {allSongs}
        </div>
      </>
    )
  }
}

export default SongLibrary;
