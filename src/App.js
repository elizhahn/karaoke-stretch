import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      mySongs: []
    }
  }

  render () {
    return (
      <div className="app">
        <Route exact path="/">
          <h1>CarryOkay</h1>
          <p>Hello friend 😬</p>
          <Navigation class="home-nav" />
        </Route>
        <Route path="/mysongs">
          <p>Made it to mysongs</p>
          <Navigation class="mysongs-nav" />
        </Route>
        <Route path="/songbook">
          <p>Made it to songbook</p>
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
