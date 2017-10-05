import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert, Row, Table} from 'react-bootstrap';

import {getCustomers} from '../actions/customers-actions';

class Customers extends React.Component {
	componentDidMount() {
		this.props.getCustomers();
	}

	render() {
		if (this.props.hasErrored) {
    	return  <Alert bsStyle="danger">Unable to load the customers</Alert>;
    }

		const tableRows = this.props.customers.map((cust) => {
			return (
				<tr key={cust.id}>
					<td>{cust.id}</td>
					<td>{cust.name}</td>
					<td>{cust.address}</td>
					<td>{cust.phone}</td>
					<td>-</td>
				</tr>
			);
		});

		return(
			<Row>
				<Table responsive hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Address</th>
							<th>Phone</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{tableRows}
					</tbody>
				</Table>
			</Row>
		);
	}
}

function mapStateToProps(state) {
	return {
		customers: state.customers,
		hasErrored: state.customersHasErrored
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCustomers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
