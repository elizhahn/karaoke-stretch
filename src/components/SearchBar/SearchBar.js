import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  render () {
    return (
      <form>
        <input
          type='text'
          placeholder='Search all songs'
        />
        <button>Search!</button>

      </form>
    )
  }
}

export default SearchBar;
