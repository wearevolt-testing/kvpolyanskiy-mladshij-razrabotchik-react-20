import React from 'react';
import {findDOMNode} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';

import ProductEditor from './product-editor';

class UpdateProduct extends React.Component {
	constructor() {
		super();
		this.state = {
			product: {}
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({product: nextProps.product});
	}

	save() {
		this.props.save(this.state.product);
		this.close();
	}
	close() {
		this.props.onHide();
		this.setState({product: {}});
	}

	onChange(product) {
		this.setState({product});
	}

	render() {
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<ProductEditor product={this.state.product} onChange={this.onChange.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
						<Button onClick={this.close.bind(this)}>Cancel</Button>
						<Button bsStyle="primary" onClick={this.save.bind(this)}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default UpdateProduct;
