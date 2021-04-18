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
        console.log(data)
        const [songs, genres] = data;
        this.modifyData(songs, genres);
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

  modifyData = (songData, genreData) => {
    const modifiedData = songData.reduce((accu, currentSong, i) => {
        accu.push(currentSong);

        const matchedItem = genreData.find(genreItem => genreItem.song_id === currentSong.id);
        let arrayGenres = Object.entries(matchedItem);
        let foundGenres = arrayGenres.filter(item => item.includes(true));

        accu[i].genres = foundGenres.map(genre => genre[0]);
        return accu;
      }, []);

      this.setState({ songBook: modifiedData });
      this.setState({ renderedSongs: [...this.state.songBook] })
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
            <h1 className="home-title glow">CarryOkay</h1>
            <p className="home-greeting">Ready to sing?</p>
            <Navigation dynamic="home-nav" />
          </section>
        </Route>
        <Route path="/mysongs">
          <Navigation dynamic="off-home-nav" />
          {!!this.state.mySongs.length && 
          <MySongLibrary
          songs={ this.state.mySongs }
          mySongs={this.state.mySongs }
          handleSong={this.removeSong}
          buttonIcon={[<MdRemoveCircle className="handle-song-icon"/>]}
          />}
          {this.state.error &&
          <h2>{this.state.error}</h2>}
        </Route>
        <Route path="/songbook">
          <Navigation dynamic="off-home-nav" />
          {!!this.state.songBook.length && 
          <SongLibrary 
          songs={ this.state.songBook } 
          mySongs={this.state.mySongs}
          handleSong={this.addSong} 
          buttonIcon={[<RiHeartAddLine className="handle-song-icon"/> , <FaHeart className="heart-icon" data-cy="heart-icon"/>]}
          />}
          {this.state.error &&
          <h2>{this.state.error}</h2>}
        </Route>
      </div>
    )
  }
}

export default App;
