import React from 'react';
import {findDOMNode} from 'react-dom';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class ProductEditor extends React.Component {
	onChange(event) {
		this.props.onChange({
			...this.props.product,
			name: findDOMNode(this.refs.name).value,
			price: findDOMNode(this.refs.price).value,
		});
	}

	render() {
    return (
			<div onChange={this.onChange.bind(this)}>
				<FormGroup controlId="name">
					<ControlLabel>Name</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter name"
						ref="name"
						defaultValue={this.props.product.name} />
				</FormGroup>
				<FormGroup controlId="price">
					<ControlLabel>Price</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter price"
						ref="price"
						defaultValue={this.props.product.price} />
				</FormGroup>
			</div>
    );
  }
}

export default ProductEditor;
