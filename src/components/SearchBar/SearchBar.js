import React, { Component } from 'react';
import './SearchBar.scss';

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
    this.setState({ searchInput: '' });
  }

  search = (event) => {
    event.preventDefault();
    this.props.searchForSongs(this.state.searchInput);
    this.clearInputs();
  }

  clearSearch = (event) => {
    event.preventDefault();
    this.props.searchForSongs(''); 
  }

  render () {
    return (
      <form data-cy="search-bar">
        <input
          className='search-bar'
          type='text'
          placeholder='Search all songs'
          name='searchInput'
          value={ this.state.searchInput }
          onChange={ event => this.handleChange(event) }
        />
        <button onClick={ event => this.search(event) }>Search!</button>
        <button onClick={event => this.clearSearch(event)}>Clear Search</button>

      </form>
    )
  }
}

export default SearchBar;
