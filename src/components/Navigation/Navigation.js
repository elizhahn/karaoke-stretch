import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = (props) => {
  return (
    <nav className= { props.class } >
      <div className="home-btns home-my-songs">
        <NavLink activeClassName="mysongs-active"  className="home-link" id="my-songs" to="/mysongs">My Songs</NavLink>
      </div>
      <div className="letter-k">
        <NavLink to="/" className="" >To Home</NavLink>
      </div>
      <div className="home-btns home-song-book">
        <NavLink activeClassName="songbook-active" className="home-link" id="song-book" to="/songbook">SongBook</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
