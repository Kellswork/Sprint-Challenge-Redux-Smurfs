import React from "react";
import { NavLink } from "react-router-dom";
import './SmurfNav.css'

export default function smurfNav() {
  return (
    <div className='smurf-nav'>
      <NavLink exact to="/">Smurfs</NavLink>
      <NavLink to="/smurf_form">Add Smurf</NavLink>
    </div>
  );
}
