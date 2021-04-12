import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className= { props.class } >
      <NavLink to="/mysongs" >My Songs</NavLink>
      <NavLink to="/songbook">Songbook</NavLink>
    </nav>
  )
}

export default Navigation;