import React from "react";
import AddPlant from "./AddPlant";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

class CatalogControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal  = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
  }

  showFormModal(event) {
    this.setState({formModalIsShowing: true
    });
  }

  hideFormModal(event) {
    this.setState({formModalIsShowing: false
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.showFormModal}>
          Add Plant</button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
              <Modal.Title>New Plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <AddPlant
                addNewPlant={this.props.addNewPlant}
                hideFormAfterSubmission = {this.hideFormModal}/>
              <br/>
              <img src="http://pistilsnursery.com/wp-content/uploads/2017/07/Brooklyn-Botanic-Gardens-Conservatory-featured.jpg"/>
             </Modal.Body>
           </Modal>
      </div>

    );
  }
}

CatalogControl.propTypes = {
  addNewPlant: PropTypes.func
}

export default CatalogControl;
