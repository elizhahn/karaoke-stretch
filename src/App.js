import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import './App.css';
import songData from "./song-data";

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

  render () {
    console.log(this.state)
    return (
      <div className="app">
        <Route exact path="/">
          <h1>CarryOkay</h1>
          <p>Hello friend 😬</p>
          <Navigation class="home-nav" />
        </Route>
        <Route path="/mysongs">
          <p>Made it to mysongs</p>
          {this.state.mySongs.length && <SongLibrary songs={ this.state.mySongs }/>}
          <Navigation class="mysongs-nav" />
        </Route>
        <Route path="/songbook">
          <p>Made it to songbook</p>
         {this.state.songBook.length && <SongLibrary songs={ this.state.songBook }/>}
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
