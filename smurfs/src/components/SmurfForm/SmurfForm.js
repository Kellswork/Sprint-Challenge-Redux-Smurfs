import "../SmurfForm/SmurfForm.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/actionCreator';

class SmurfForm extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
    this.heightRef = React.createRef();
  }

  onAddSmurf = () => {
      const smurf = {
          name: this.nameRef.current.value,
          age: this.ageRef.current.value,
          height: this.heightRef.current.value
      }
      this.props.addSmurf(smurf);
  }

  render() {
    return (
      <form action='#' onSubmit={this.onAddSmurf}>
        <h2>Wanna Add A New Smurf?</h2>
        <div className="smurf-details">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input className='input' type="text" name="name" ref={this.nameRef} />
            <span className='border'></span>
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input className='input' type="number" name="age" ref={this.ageRef} />
            <span className='border'></span>
          </div>
          <div className="input-group">
            <label htmlFor="height">Height</label>
            <input className='input' type="height" name="height" ref={this.heightRef} />
            <span className='border'></span>
          </div>
          <button className="btn">Add Smurf</button>
        </div>
      </form>
    );
  }
}

export default connect(null, {addSmurf} )(SmurfForm);
