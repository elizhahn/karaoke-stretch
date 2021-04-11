import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
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
          <nav className="home-nav">
            <NavLink to="/mysongs" >My Songs</NavLink>
            <NavLink to="/songbook">Songbook</NavLink>
          </nav>
        </Route>
        <Route path="/mysongs">
          <p>Made it to mysongs</p>
        </Route>
        <Route path="/songbook">
          <p>Made it to songbook</p>
        </Route>
      </div>
    )
  }
}

export default App;
