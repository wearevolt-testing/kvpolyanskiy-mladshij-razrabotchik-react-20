import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert, Button, Col, Grid, Row, Table} from 'react-bootstrap';

import {getProducts, addProduct, updateProduct, deleteProduct} from '../../actions/products-actions';
import AddProduct from './add-product';
import UpdateProduct from './update-product';
import DeleteItem from '../delete-item';

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
		const closeAddProduct = () => this.setState({showAddProduct : false});
		const updateProduct = (event, prod) => {
			if (event.target.className === 'glyphicon glyphicon-trash') {
				this.setState({showDeleteProduct : true, currentProduct: prod});
			} else {
				this.setState({showUpdateProduct : true, currentProduct: prod});
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
				<AddProduct show={this.state.showAddProduct} onHide={closeAddProduct} save={this.props.addProduct}	/>
				<UpdateProduct
					product={this.state.currentProduct}
					show={this.state.showUpdateProduct}
					onHide={closeUpdateProduct}
					save={this.props.updateProduct}
				/>
				<DeleteItem
					name={`product (id: ${this.state.currentProduct.id})`}
					item={this.state.currentProduct}
					show={this.state.showDeleteProduct}
					onHide={closeDelteProduct}
					save={this.props.deleteProduct}
				/>
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
	return bindActionCreators({getProducts, addProduct, updateProduct, deleteProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
