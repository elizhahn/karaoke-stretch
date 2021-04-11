import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
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
            <Link to="/mysongs" >My Songs</Link>
            <Link to="/songbook">Songbook</Link>
          </nav>
        </Route>
        <Route path="/mysongs">

        </Route>
        <Route path="/songbook">

        </Route>
      </div>
    )
  }
}

export default App;
