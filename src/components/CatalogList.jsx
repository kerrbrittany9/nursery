import React from "react";
import PropTypes from "prop-types";
import PlantDetail from "./PlantDetail";


function CatalogList(props){
  return (
    <div>
      <h3>{props.plants.map((plant, index) =>
          <PlantDetail
            name={plant.name}
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
