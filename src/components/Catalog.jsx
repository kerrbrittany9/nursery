import React from "react";
import CatalogControl from "./CatalogControl";
import AddPlant from "./AddPlant";
import PropTypes from "./prop-types";
import CatalogList from "./CatalogList";

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCatalog: [],
    };
    this.addNewPlant = this.addNewPlant.bind(this);
    this.updateWaterCare = this.updateWaterCare.bind(this);
  }

  componentDidMount() {
    this.timeSinceWatered = setInterval(() => this.updateWaterCare(), 5000);
  }

  addNewPlant(newPlant) {
    let newMasterCatalog = this.state.masterCatalog.slice();
    newMasterCatalog.push(newPlant);
    this.setState({masterCatalog: newMasterCatalog});
    console.log(this.state.masterCatalog);
  }


  updateWaterCare() {
    let newMasterCatalog = this.state.masterCatalog.slice();
    newMasterCatalog.forEach((plant) =>
      plant.setTimeSinceWatered()
    );
    this.setState({masterCatalog: newMasterCatalog});


  render() {
    return (
      <div>
        <CatalogControl addNewPlant = {this.addNewPlant}/>
          <CatalogList
          plants={this.state.masterCatalog}/>
      </div>
    )
  }
};

Catalog.propTypes = {
  addNewPlant: PropTypes.func
}

export default Catalog;
