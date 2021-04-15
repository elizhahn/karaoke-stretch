import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  clearInputs = () => {
    this.setState({ searchInput: ''});
  }

  search = (event) => {
    event.preventDefault();
    this.props.searchForSongs(this.state.searchInput);
    this.clearInputs();
  }

  render () {
    return (
      <form>
        <input
          className='search-bar'
          type='text'
          placeholder='Search all songs'
          name='searchInput'
          value={ this.state.searchInput }
          onChange={ event => this.handleChange(event) }
        />
        <button onClick={ event => this.search(event) }>Search!</button>

      </form>
    )
  }
}

export default SearchBar;
