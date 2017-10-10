import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert, Button, Col, Grid, Row, Table} from 'react-bootstrap';

import {getProducts} from '../../actions/products-actions';

class Products extends React.Component {
	constructor() {
		super();
		this.state = {
			showAddProduct : false,
			showUpdateProduct: false,
			showDeleteProduct: false,
			currentProduct: {}
		}
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		if (this.props.hasErrored) {
    	return  <Alert bsStyle="danger">Something went wrong try again</Alert>;
    }

		const addProduct = () => this.setState({showAddProduct : true});
		const closeAddPdoduct = () => this.setState({showAddProduct : false});
		const updateProduct = (event, cust) => {
			if (event.target.className === 'glyphicon glyphicon-trash') {
				this.setState({showDeleteProduct : true, currentProduct: cust});
			} else {
				this.setState({showUpdateProduct : true, currentProduct: cust});
			}
		};
		const closeUpdateProduct = () => this.setState({showUpdateProduct : false, currentProduct: {}});
		const closeDelteProduct = () => this.setState({showDeleteProduct : false, currentProduct: {}});

		const tableRows = this.props.products.map((prod) => {
			return (
				<tr key={prod.id} onClick={(event) => updateProduct(event, prod)}>
					<td>{prod.id}</td>
					<td>{prod.name}</td>
					<td>{prod.price}</td>
					<td><span className="glyphicon glyphicon-trash"></span></td>
				</tr>
			);
		});

		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Products list <Button onClick={addProduct}>Create</Button></h1>
					</Col>
				</Row>
				<Row>
					<Table responsive hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Price</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{tableRows}
						</tbody>
					</Table>
				</Row>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products,
		hasErrored: state.hasErrored,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
