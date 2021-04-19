import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navigation = ({ dynamic }) => {
  return (
    <nav className={ dynamic }>
      {dynamic === 'home-nav' && <div className={ `marbled rotate-bg`}></div>}
      <NavLink className="home-btns home-link" id="my-songs" to="/mysongs" data-cy="my-songs-nav">My Songs</NavLink>
      {dynamic !== 'home-nav' && <NavLink to="/" className="home-link vinyl" data-cy='home-nav'/>}
      <NavLink className="home-btns home-link" id="song-book" to="/songbook" data-cy="song-book-nav">Song Book</NavLink>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  dynamic: PropTypes.string.isRequired,
};
