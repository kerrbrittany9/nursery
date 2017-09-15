import React from "react";
import PropTypes from "prop-types";
import PlantDetail from "./PlantDetail";


function CatalogList(props){

  var mainContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '3% 3%'
  }
  return (
    <div>
      <h3 style={mainContainerStyle}>{props.plants.map((plant, index) =>
          <PlantDetail
            name={plant.name}
            water={plant.water}
            key={index}/>
          )}
      </h3>
    </div>
  );
}

CatalogList.propTypes = {
  plants: PropTypes.array,
};

export default CatalogList;
