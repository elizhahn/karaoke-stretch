import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import './App.css';
import { fetchAllSongData } from './APICalls';
import { RiHeartAddLine } from 'react-icons/ri';
import { MdRemoveCircle } from 'react-icons/md';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [],
      mySongs: []
    }
  }

  componentDidMount() {
    fetchAllSongData()
      .then(data => {
        const [songs, genres] = data;
        this.modifyData(songs, genres);
      })
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
    console.log(this.state)
    return (
      <div className="App">
        <Route exact path="/">
          <section className="home-container">
            <h1 className="home-title">CarryOkay</h1>
            <p className="home-greeting">Hello friend 😬</p>
            <Navigation class="home-nav" />
          </section>
        </Route>
        <Route path="/mysongs">
          <h1>My Songs</h1>
          {this.state.mySongs.length && <SongLibrary songs={ this.state.mySongs } handleSong={this.removeSong} buttonIcon={<MdRemoveCircle className="handle-song-icon"/>}/>}
          <Navigation class="mysongs-nav" />
        </Route>
        <Route path="/songbook">
          <h1>SongBook</h1>
         {this.state.songBook.length && <SongLibrary songs={ this.state.songBook } handleSong={this.addSong} buttonIcon={<RiHeartAddLine className="handle-song-icon"/>}/>}
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
