import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SongLibrary from './components/SongLibrary/SongLibrary';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import { fetchAllSongs, fetchAllGenres, fetchSongData } from './APICalls';
import songData from './song-data';
import { RiHeartAddLine } from 'react-icons/ri';
import { MdRemoveCircle } from 'react-icons/md';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songBook: [],
      renderedSongs: [],
      mySongs: []
    }
  }

  componentDidMount() {

    const songData = fetchAllSongs()
      .then(data => {
        return data
      })

      const genreData = fetch('http://localhost:8080/genres')
      .then(response => response.json())
      .then(data => {
        return data
      })

      this.modifyData(songData, genreData)
  }

  modifyData = (songData, genreData) => {
    Promise.all([songData, genreData])
      .then(values => {
        const songData = values[0];
        const genreData = values[1];

        const modifiedData = songData.reduce((accu, currentSong, i) => {
          accu.push(currentSong);

          const matchedItem = genreData.find(genreItem => genreItem.song_id === currentSong.id);
          let arrayGenres = Object.entries(matchedItem);
          let foundGenres = arrayGenres.filter(item => item.includes(true));

          accu[i].genres = foundGenres.map(genre => genre[0]);
          return accu;
        }, []);
        this.setState({ songBook: modifiedData });
        this.setState({renderedSongs: [...this.state.songBook]})
      })


  }

  addSong = (id) => {
   const songToAdd = this.state.songBook.find(song => {
    return song.id === id
    })
    this.setState({mySongs: [...this.state.mySongs, songToAdd]})
  }

  removeSong = (id) => {
    const editedSongList = this.state.mySongs.filter(song => {
      return song.id !== id
    })
    this.setState({mySongs: editedSongList})
  }

  searchForSongs = (searchQuery) => {
    let modifiedSearchQuery = searchQuery.toUpperCase();
    let matchingSongs = this.state.songBook.filter(song => song.title.toUpperCase().includes(modifiedSearchQuery)
    || song.genres.toString().toUpperCase().includes(modifiedSearchQuery)
    || song.artist.toUpperCase().includes(modifiedSearchQuery)
    )
    this.setState({ renderedSongs: matchingSongs })
  }

  render () {
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
          <SearchBar searchForSongs={this.searchForSongs} />
         {this.state.songBook.length && <SongLibrary songs={ this.state.renderedSongs } handleSong={this.addSong} buttonIcon={<RiHeartAddLine className="handle-song-icon"/>}/>}
          <Navigation class="songbook-nav" />
        </Route>
      </div>
    )
  }
}

export default App;
