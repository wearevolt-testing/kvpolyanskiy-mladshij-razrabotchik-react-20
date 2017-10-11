import React from 'react';
import {findDOMNode} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';

class DeleteItem extends React.Component {
	save() {
		this.props.save(this.props.item);
		this.close();
	}
	close() {
		this.props.onHide();
	}


	render() {
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Delete {this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<h3>Are you sure?</h3>
          </Modal.Body>
          <Modal.Footer>
						<Button onClick={this.close.bind(this)}>No</Button>
						<Button bsStyle="warning" onClick={this.save.bind(this)}>Yes</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default DeleteItem;
