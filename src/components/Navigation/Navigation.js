import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ({ dynamic }) => {
  return (
    <nav className={ dynamic }>
      {dynamic === 'home-nav' && <div className={ `marbled rotate-bg`}></div>}
      <NavLink className="home-btns home-link" id="my-songs" to="/mysongs" data-cy="my-songs-nav">My Songs</NavLink>
      {dynamic !== 'home-nav' && <NavLink to="/" className="home-link vinyl" data-cy='home-nav'/>}
      <NavLink className="home-btns home-link" id="song-book" to="/songbook" data-cy="song-book-nav">Song Book</NavLink>
    </nav>
  )
}

export default withRouter(Navigation);
