import React from "react";
import "./Smurf.css";
import { connect } from "react-redux";
import { deleteSmurf } from "../../actions/actionCreator";

function Smurf(props) {
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} years</p>
      <p>{props.smurf.height}cm tall </p>
      <div className="buttons">
        <button
          className="delete-btn"
          onClick={() => {
            props.deleteSmurf(props.smurf.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
