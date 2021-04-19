import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = ({ dynamic }) => {
  const determineHomeLink = () => {
    if (dynamic !== 'home-nav') {
      return 'active-nav-bar'
    } else {
      return 'home-link'
    }
  }

  const determineBackground = () => {
    if (dynamic !== 'home-nav') {
      return ''
    } else {
      return ''
    }
  }

  return (
    <nav className={ dynamic }>
      <div className="marbled"></div>
      <div className="home-btns home-my-songs">
        <NavLink activeClassName="mysongs-active"  className={ determineHomeLink() } id="my-songs" to="/mysongs" data-cy="my-songs-nav">{`My\nSongs`}</NavLink>
      </div>
      <div>
        {dynamic !== 'home-nav' && <NavLink to="/" className="home-link vinyl"/>}
      </div>
      <div className="home-btns home-song-book">
        <NavLink activeClassName="songbook-active" className="home-link" id="song-book" to="/songbook" data-cy="song-book-nav">Song{"\n"}Book</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
