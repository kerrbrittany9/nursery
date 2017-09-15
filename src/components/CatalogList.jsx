import React from "react";
import PropTypes from "prop-types";


function CatalogList(props){
  return (
    <div>
      <h3>{props.plants.map((plant, index) =>
          <PlantDetail
            name={plant.name}
            timeSinceWatered={plant.timeSinceWatered}
            water={plant.water}
            key={index}/>
          )}
      </h3>
      <hr/>
    </div>
  );
}

CatalogList.propTypes = {
  plants: PropTypes.array,
};

export default CatalogList;
