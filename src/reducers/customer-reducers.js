export function customers(state=[], action) {
	switch (action.type) {
		case 'GET_CUSTOMERS':
			return action.customers;
		case 'ADD_CUSTOMER':
			return state.concat(action.customer);
		case 'UPDATE_CUSTOMER':
			const idUpdate = state.findIndex((customer) => customer.id === action.customer.id);
			return idUpdate  < 0 ? state : [...state.slice(0, idUpdate), action.customer, ...state.slice(idUpdate + 1)];
		case 'DELETE_CUSTOMER':
			const idDelete = state.findIndex((customer) => customer.id === action.customer.id);
			return idDelete  < 0 ? state : [...state.slice(0, idDelete), ...state.slice(idDelete + 1)];
		default:
			return state;
	}
}

export function customersHasErrored(state=false, action) {
	switch (action.type) {
		case 'GET_CUSTOMERS_REJECTED':
		case 'ADD_CUSTOMER_REJECTED':
		case 'UPDATE_CUSTOMER_REJECTED':
		case 'DELETE_CUSTOMER_REJECTED':
			return action.hasErrored;
		default:
			return state;
	}
}
