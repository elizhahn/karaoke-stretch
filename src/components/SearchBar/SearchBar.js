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
  }

  render () {
    return (
      <form data-cy='search-form' className='search-container'>
      <button onClick={ event => this.clearSearch(event) } data-cy='clear-btn' className='clear-btn'>Cancel</button>
        <input
          className='search-bar'
          type='text'
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
