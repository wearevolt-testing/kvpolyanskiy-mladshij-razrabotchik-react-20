import React from 'react';
import {findDOMNode} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';

import CustomerEditor from './customer-editor';

class AddCustomer extends React.Component {
	constructor() {
		super();
		this.state = {
			customer: {}
		}
	}

	save() {
		this.props.save(this.state.customer);
		this.close();
	}
	close() {
		this.props.onHide();
		this.setState({customer: {}});
	}

	onChange(customer) {
		this.setState({customer});
	}

	render() {
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Add customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<CustomerEditor customer={this.state.customer} onChange={this.onChange.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
						<Button onClick={this.close.bind(this)}>Cancel</Button>
						<Button bsStyle="primary" onClick={this.save.bind(this)}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default AddCustomer;
