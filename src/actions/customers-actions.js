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
