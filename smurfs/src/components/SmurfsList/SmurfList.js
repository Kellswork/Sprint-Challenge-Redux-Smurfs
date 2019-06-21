import React, { Component } from "react";
import Smurf from "../Smurf/Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../../actions/actionCreator";
import '../SmurfsList/SmurfList.css';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {

    const list = this.props.smurfs || [];
    return (
      <div className="smurfs-container">
        <h1>Smurfeees</h1>
        <div className="smurfs">
          {list.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
