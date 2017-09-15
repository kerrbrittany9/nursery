import React from "react";
import PropTypes from "prop-types";
import Water from "./Water";

function PlantDetail(props) {

  return (
    <div>
      <h3>Plant Type: {props.name}</h3>
      <h4>Watering care: {props.water}</h4>
      <Water/>
      <hr/>
    </div>
  )
}

PlantDetail.propTypes = {
  name: PropTypes.string,
  water: PropTypes.string,
  timeWatered: PropTypes.instanceOf(Date)
}

export default PlantDetail;
