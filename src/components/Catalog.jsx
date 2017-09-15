import React from "react";
import CatalogControl from "./CatalogControl";
import AddPlant from "./AddPlant";
import PropTypes from "prop-types";
import CatalogList from "./CatalogList";

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCatalog: [],
    };
    this.addNewPlant = this.addNewPlant.bind(this);
  }


  addNewPlant(newPlant) {
    let newMasterCatalog = this.state.masterCatalog.slice();
    newMasterCatalog.push(newPlant);
    this.setState({masterCatalog: newMasterCatalog});
  }


  render() {
    return (
      <div>
        <CatalogControl
          addNewPlant = {this.addNewPlant}/>
        <CatalogList
          plants={this.state.masterCatalog}/>
      </div>
    )
  };
}

Catalog.propTypes = {
  addNewPlant: PropTypes.func
}

export default Catalog;
