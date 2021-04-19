import React, { Component } from 'react';
import './partials/_variables.scss'
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import MySongLibrary from './components/mySongLibrary/MySongLibrary';
import './App.scss';
import { fetchAllSongData } from './APICalls';
import { RiHeartAddLine } from 'react-icons/ri';
import { MdRemoveCircle } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { modifyData } from './utility';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [],
      mySongs: [],
      error: ""
    }
  }

  componentDidMount() {
    fetchAllSongData()
      .then(data => {
        const [songs, genres] = data;
        const modifiedData = modifyData(songs, genres);
        this.setState({ songBook: modifiedData, renderedSongs: [...this.state.songBook] });
      })
      .catch(err => this.setState({ error: this.handleError(err) }));
  }

  handleError = (error) => {
    if (error < 500) {
      return "Hmmm, something's not quite right. Care to try again?"
    } else {
      return "Oops, our system seems to be down... how embarassing. Try again in a few moments!"
    }
  }

  addSong = (id) => {
   const songToAdd = this.state.songBook.find(song => {
    return song.id === id
    })
    this.setState({ mySongs: [...this.state.mySongs, songToAdd] })
  }

  removeSong = (id) => {
    const editedSongList = this.state.mySongs.filter(song => {
      return song.id !== id
    })
    this.setState({ mySongs: editedSongList })
  }

  render () {
    return (
      <div className="App">
        <Route exact path="/">
          <section className="home-container">
            <h1 className="home-title glow" data-cy="App-title">CarryOkay</h1>
            <p className="home-greeting" data-cy="home-greeting">Ready to sing?</p>
            <Navigation dynamic="home-nav" />
          </section>
        </Route>
        <Route path="/mysongs">
          <Navigation dynamic="off-home-nav" />
          { !!this.state.mySongs.length &&
          <MySongLibrary
          songs={ this.state.mySongs }
          mySongs={this.state.mySongs }
          handleSong={ this.removeSong }
          buttonIcon={ [<MdRemoveCircle className="handle-song-icon"/>] }
          /> }
          { this.state.error &&
          <h2>{this.state.error}</h2> }
        </Route>
        <Route path="/songbook">
          <Navigation dynamic="off-home-nav" />
          { !!this.state.songBook.length &&
          <SongLibrary
          songs={ this.state.songBook }
          mySongs={ this.state.mySongs }
          handleSong={ this.addSong }
          buttonIcon={ [<RiHeartAddLine className="handle-song-icon"/> , <FaHeart className="heart-icon" data-cy="heart-icon"/>] }
          />}
          { this.state.error && <h2 data-cy="server-error-msg">{ this.state.error }</h2> }
        </Route>
      </div>
    )
  }
}

export default App;
