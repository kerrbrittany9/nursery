import React from "react";
import CatalogControl from "./CatalogControl";

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
    newMasterCatalog.push(newPlant;
    this.setState({masterCatalog: newMasterCatalog});
    console.log(this.state.masterCatalog);
  }

  render() {
    return (
      <div>
        <CatalogControl addNewPlant= {this.addNewPlant}/>
      </div>
    )
  }
};

Catalog.propTypes = {
  addNewPlant: PropTypes.func
}

export default Catalog;
