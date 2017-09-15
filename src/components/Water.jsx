import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.waterPlant = this.waterPlant.bind(this);
    this.state = {
      water: 0,
    }
  }

  waterPlant(timeWatered) {
    let now = new Moment(new Date());
    let then = new Moment(timeWatered);
    let stringTime = then.from(now, true);
    return stringTime
  }

  render() {
    return (
      <div>
        <button onClick={this.waterPlant}>Water</button>
        <p>Watered: {this.state.water}</p>
      </div>
    )
  };
}

export default Water;
