import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = (props) => {
  return (
    <nav className= { props.class } >
      <div className="home-btns home-my-songs">
        <NavLink activeClassName="mysongs-active"  className="home-link" id="my-songs" to="/mysongs" data-cy="my-songs-nav">My Songs</NavLink>
      </div>
      {/* <div className="letter-k"></div> */}
      <div className="home-btns home-song-book">
        <NavLink activeClassName="songbook-active" className="home-link" id="song-book" to="/songbook" data-cy="song-book-nav">Song Book</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
