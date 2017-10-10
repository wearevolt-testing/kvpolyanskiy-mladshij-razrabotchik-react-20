import React from 'react';
import {findDOMNode} from 'react-dom';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class CustomerEditor extends React.Component {
	onChange(event) {
		this.props.onChange({
			...this.props.customer,
			name: findDOMNode(this.refs.name).value,
			address: findDOMNode(this.refs.address).value,
			phone: findDOMNode(this.refs.phone).value
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
						defaultValue={this.props.customer.name} />
				</FormGroup>
				<FormGroup controlId="address">
					<ControlLabel>Address</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter address"
						ref="address"
						defaultValue={this.props.customer.address} />
				</FormGroup>
				<FormGroup controlId="phone">
					<ControlLabel>Phone</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter phone"
						ref="phone"
						defaultValue={this.props.customer.phone} />
				</FormGroup>
			</div>
    );
  }
}

export default CustomerEditor;
