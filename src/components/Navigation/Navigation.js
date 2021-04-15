import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className= { props.class } >
      <div className="home-btns home-my-songs">
        <NavLink className="home-link" id="my-songs" to="/mysongs" >My Songs</NavLink>
      </div>
      <div className="letter-k"></div>
      <div className="home-btns home-song-book">
        <NavLink className=" home-link" id="song-book" to="/songbook"> Songbook</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
