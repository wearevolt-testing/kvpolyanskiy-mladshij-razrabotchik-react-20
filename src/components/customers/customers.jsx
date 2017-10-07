import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert, Button, Col, Grid, Row, Table} from 'react-bootstrap';

import AddCustomer from './add-customer';
import UpdateCustomer from './update-customer';
import DeleteCustomer from './delete-customer';
import {getCustomers, addCustomer, updateCustomer, deleteCustomer} from '../../actions/customers-actions';

class Customers extends React.Component {
	constructor() {
		super();
		this.state = {
			showAddCustomer : false,
			showUpdateCustomer: false,
			showDeleteCustomer: false,
			currentCustomer: {}
		}
	}

	componentDidMount() {
		this.props.getCustomers();
	}

	render() {
		if (this.props.hasErroredGettingCustomers) {
    	return  <Alert bsStyle="danger">Something went wrong try again</Alert>;
    }

		const addCustomer = () => this.setState({showAddCustomer : true});
		const closeAddCustomer = () => this.setState({showAddCustomer : false});
		const updateCustomer = (event, cust) => {
			if (event.target.className === 'glyphicon glyphicon-trash') {
				this.setState({showDeleteCustomer : true, currentCustomer: cust});
			} else {
				this.setState({showUpdateCustomer : true, currentCustomer: cust});
			}
		};
		const closeUpdateCustomer = () => this.setState({showUpdateCustomer : false, currentCustomer: {}});
		const closeDelteCustomer = () => this.setState({showDeleteCustomer : false, currentCustomer: {}});

		const tableRows = this.props.customers.map((cust) => {
			return (
				<tr key={cust.id} onClick={(event) => updateCustomer(event, cust)}>
					<td>{cust.id}</td>
					<td>{cust.name}</td>
					<td>{cust.address}</td>
					<td>{cust.phone}</td>
					<td><span className="glyphicon glyphicon-trash"></span></td>
				</tr>
			);
		});

		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Customers list <Button onClick={addCustomer}>Create</Button></h1>
					</Col>
				</Row>
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
				<AddCustomer show={this.state.showAddCustomer} onHide={closeAddCustomer} save={this.props.addCustomer}	/>
				<UpdateCustomer
					customer={this.state.currentCustomer}
					show={this.state.showUpdateCustomer}
					onHide={closeUpdateCustomer}
					save={this.props.updateCustomer}
				/>
				<DeleteCustomer
					customer={this.state.currentCustomer}
					show={this.state.showDeleteCustomer}
					onHide={closeDelteCustomer}
					save={this.props.deleteCustomer}
				/>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		customers: state.customers,
		hasErrored: state.hasErrored,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCustomers, addCustomer, updateCustomer, deleteCustomer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
