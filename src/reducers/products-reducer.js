export default function productsReducer(state=[], action) {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return state;
		case 'UPDATE_PRODUCT':
			return state;
		case 'DELETE_PRODUCT':
			return state;
	}
	return state;
}
