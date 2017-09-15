import React from "react";
import PropTypes from "prop-types";

function PlantDetail(props) {
  return (
    <div>
      <h3>Plant Type: {props.name}</h3>
      <h4>Watering care: {props.water}</h4>
      <h5>Time Since Watered: {props.timeSinceWatered}</h5>
    </div>
  )
}

PlantDetail.propTypes = {
  name: PropTypes.string,
  water: PropTypes.string,
  timeSinceWatered: PropTypes.string
}

export default PlantDetail;
