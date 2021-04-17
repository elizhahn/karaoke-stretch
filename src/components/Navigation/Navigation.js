import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = ({ dynamic }) => {
  const determineHomeLink = () => {
    if (dynamic !== 'home-nav') {
      return ''
    } else {
      return 'letter-k'
    }
  }


  return (
    <nav className={ dynamic }>
      <div className="home-btns home-my-songs">
        <NavLink activeClassName="mysongs-active"  className="home-link" id="my-songs" to="/mysongs">My Songs</NavLink>
      </div>
      <div className={ determineHomeLink() }>
        {dynamic !== 'home-nav' && <NavLink to="/" className="home-link">To Home</NavLink>}
      </div>
      <div className="home-btns home-song-book">
        <NavLink activeClassName="songbook-active" className="home-link" id="song-book" to="/songbook">SongBook</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
