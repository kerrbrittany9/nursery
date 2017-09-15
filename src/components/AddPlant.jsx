import React from "react";
import PropTypes from "prop-types";
import Plant from "../models/Plant.js";

class AddPlant extends React.Component {

  constructor(props){
    super(props);
    this.prepareAddPlant = this.prepareAddPlant.bind(this);
  }

  prepareAddPlant(event) {
    event.preventDefault()
    const { _name, _water } = this.refs;
    var newPlant = new Plant(_name.value, _water.value);
    console.log(newPlant);
    this.props.addNewPlant(newPlant);
    this.props.hideFormAfterSubmission();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.prepareAddPlant}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Plant Type"/>
            <input
              ref="_water"
              type="text"
              id="water"
              placeholder="Watering routine"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

AddPlant.propTypes = {
  addNewPlant: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default AddPlant;
