export function customers(state=[], action) {
	switch (action.type) {
		case 'GET_CUSTOMERS':
			return action.customers;
		default:
			return state;
	}
}

export function customersHasErrored(state=false, action) {
	switch (action.type) {
		case 'GET_CUSTOMERS_REJECTED':
			return action.hasErrored;
		default:
			return state;
	}
}
