import React, { Component } from 'react'
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
        <h1>CarryOkay</h1>
        <p>Hello friend 😬</p>
      </div>
    )
  }
}

export default App;
