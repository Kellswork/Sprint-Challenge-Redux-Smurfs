import React from "react";
import './Smurf.css';

export default function Smurf(props) { 
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} years</p>
      <p>{props.smurf.height} tall </p>
    </div>
  );
}
