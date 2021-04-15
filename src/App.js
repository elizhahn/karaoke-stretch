import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import { fetchAllSongs, fetchAllGenres, fetchSongData } from './APICalls';
import songData from './song-data';
import { RiHeartAddLine } from 'react-icons/ri';
import { MdRemoveCircle } from 'react-icons/md';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [],
      renderedSongs: [],
      mySongs: []
    }
  }

  componentDidMount() {
    fetchAllSongs()
      .then(data => Promise.all(data))
      .then(data => {
        this.setState({ songBook: data })
        this.setState({renderedSongs: [...this.state.songBook]})
      })
  }

  addSong = (id) => {
   const songToAdd = this.state.songBook.find(song => {
    return song.id === id
    })
    this.setState({mySongs: [...this.state.mySongs, songToAdd]})
  }

  removeSong = (id) => {
    const editedSongList = this.state.mySongs.filter(song => {
      return song.id !== id
    })
    this.setState({mySongs: editedSongList})
  }

  searchForSongs = (searchQuery) => {
    let modifiedSearchQuery = searchQuery.toUpperCase();
    let matchingSongs = this.state.songBook.filter(song => song.title.toUpperCase().includes(modifiedSearchQuery)
    || song.genres.toString().toUpperCase().includes(modifiedSearchQuery)
    || song.artist.toUpperCase().includes(modifiedSearchQuery)
    )
    this.setState({ renderedSongs: matchingSongs })
  }

  render () {
    return (
      <div className="App">
        <Route exact path="/">
          <h1>CarryOkay</h1>
          <p>Hello friend 😬</p>
          <Navigation class="home-nav" />
        </Route>
        <Route path="/mysongs">
          <h1>My Songs</h1>
          {this.state.mySongs.length && <SongLibrary songs={ this.state.mySongs } handleSong={this.removeSong} buttonIcon={<MdRemoveCircle className="handle-song-icon"/>}/>}
          <Navigation class="mysongs-nav" />
        </Route>
        <Route path="/songbook">
          <h1>SongBook</h1>
          <SearchBar searchForSongs={this.searchForSongs} />
         {this.state.songBook.length && <SongLibrary songs={ this.state.renderedSongs } handleSong={this.addSong} buttonIcon={<RiHeartAddLine className="handle-song-icon"/>}/>}
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
