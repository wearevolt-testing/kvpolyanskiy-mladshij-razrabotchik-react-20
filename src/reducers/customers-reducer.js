export default function customersReducer(state=[], action) {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return state;
		case 'UPDATE_CUSTOMER':
			return state;
		case 'DELETE_CUSTOMER':
			return state;
	}
	return state;
}
