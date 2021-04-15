import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = (props) => {
  return (
    <nav className= { props.class } >
      <NavLink id="my-songs" to="/mysongs" >My Songs</NavLink>
      <NavLink id="song-book" to="/songbook"> Songbook</NavLink>
    </nav>
  )
}

export default Navigation;
