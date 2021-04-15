import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import './App.scss';
import songData from './song-data'
import { RiHeartAddLine } from 'react-icons/ri'
import { MdRemoveCircle } from 'react-icons/md'


class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [],
      mySongs: []
    }
  }

  componentDidMount() {
    this.setState({songBook: [...this.state.songBook, ...songData]})
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
          <Navigation class="mysongs-nav" />
          {!!this.state.mySongs.length && <SongLibrary songs={ this.state.mySongs } handleSong={this.removeSong} buttonIcon={<MdRemoveCircle className="handle-song-icon"/>}/>}
        </Route>
        <Route path="/songbook">
          <h1>SongBook</h1>
          <Navigation class="songbook-nav" />
         {!!this.state.songBook.length && <SongLibrary songs={ this.state.songBook } handleSong={this.addSong} buttonIcon={<RiHeartAddLine className="handle-song-icon"/>}/>}
        </Route>
      </div>
    )
  }
}

export default App;
