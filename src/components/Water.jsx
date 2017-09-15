import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class Water extends React.Component {

  constructor(props) {
    super(props);
    this.waterPlant = this.waterPlant.bind(this);
    this.state = {
      timeWatered: []
    }
  }

  waterPlant(timeWatered) {
    var newTimeWatered = new Date().toLocaleString();
    this.setState({timeWatered: newTimeWatered});
  }

  render() {
    return (
      <div>
        <button onClick={this.waterPlant}>Water</button>
        <h5>Watered: {this.state.timeWatered}</h5>
      </div>
    )
  }
}

export default Water;
