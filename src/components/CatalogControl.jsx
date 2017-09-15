import React from "react";
import AddPlant from "./AddPlant";
import PropTypes from "prop-types";

class CatalogControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <AddPlant addNewPlant={this.props.addNewPlant}
      hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm.bind(this)}>Add Plant</button>;
    }
    return (
      <div>
        {formAreaContent}
      </div>

    );
  }
}

CatalogControl.propTypes = {
  addNewPlant: PropTypes.func
}

export default CatalogControl;
