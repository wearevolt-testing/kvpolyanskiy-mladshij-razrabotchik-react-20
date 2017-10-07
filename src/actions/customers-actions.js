import axios from 'axios';

export function getCustomers() {
	return (dispatch) => {
		axios.get('/api/customers')
			.then((res) => {
				if (res.status === 200) {
					dispatch({type: 'GET_CUSTOMERS', customers: res.data});
				} else {
					throw Error(res.statusText);
				}
			})
			.catch((error) => {
				console.error(error);
				dispatch({type: 'GET_CUSTOMERS_REJECTED', hasErrored: true});
			});
	}
}

export function addCustomer(customer) {
	return (dispatch) => {
		axios.post('/api/customers', customer)
			.then((res) => {
				if (res.status === 200) {
					dispatch({type: 'ADD_CUSTOMER', customer: res.data});
				} else {
					throw Error(res.statusText);
				}
			})
			.catch((error) => {
				console.error(error);
				dispatch({type: 'ADD_CUSTOMER_REJECTED', hasErrored: true});
			});
	}
}

export function updateCustomer(customer) {
	return (dispatch) => {
		axios.put(`/api/customers/${customer.id}`, customer)
			.then((res) => {
				if (res.status === 200) {
					dispatch({type: 'UPDATE_CUSTOMER', customer: res.data});
				} else {
					throw Error(res.statusText);
				}
			})
			.catch((error) => {
				console.error(error);
				dispatch({type: 'UPDATE_CUSTOMER_REJECTED', hasErrored: true});
			});
	}
}

export function deleteCustomer(customer) {
	return (dispatch) => {
		axios.delete(`/api/customers/${customer.id}`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({type: 'DELETE_CUSTOMER', customer: res.data});
				} else {
					throw Error(res.statusText);
				}
			})
			.catch((error) => {
				console.error(error);
				dispatch({type: 'DELETE_CUSTOMER_REJECTED', hasErrored: true});
			});
	}
}
