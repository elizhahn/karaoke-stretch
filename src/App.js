import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import './App.css';
import songData from './song-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [...songData],
      mySongs: []
    }
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
          <SongLibrary songs={ this.state.mySongs }/>
        </Route>
        <Route path="/songbook">
          <h1>SongBook</h1>
          <Navigation class="songbook-nav" />
          <SongLibrary songs={ this.state.songBook }/>
        </Route>
      </div>
    )
  }
}

export default App;
