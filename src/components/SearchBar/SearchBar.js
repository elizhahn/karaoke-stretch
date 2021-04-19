import React, { Component } from 'react';
import './SearchBar.scss';
import search from './zoom.png';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
    this.setState({ searchInput: '' });
  }

  render () {
    return (
      <form data-cy='search-form' className='search-container'>
      <button onClick={ event => this.clearSearch(event) } data-cy='clear-btn' className='clear-btn'>Cancel</button>
        <img className='search-icon' src={search} alt='search-icon' />
        <input
          className='search-bar'
          type='text'
          img='./zoom.png'
          placeholder='Search for songs, artists, or genres'
          name='searchInput'
          value={ this.state.searchInput }
          onChange={ event => this.handleChange(event) }
          data-cy='search-bar'
        />
        <button onClick={ event => this.search(event) } data-cy='search-btn' className='search-btn'>Search!</button>
      </form>
    )
  }
}

export default SearchBar;
