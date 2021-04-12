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
          <p>Made it to mysongs</p>
          <SongLibrary songs={ this.state.mySongs }/>
          <Navigation class="mysongs-nav" />
        </Route>
        <Route path="/songbook">
          <p>Made it to songbook</p>
          <SongLibrary songs={ this.state.songBook }/>
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
