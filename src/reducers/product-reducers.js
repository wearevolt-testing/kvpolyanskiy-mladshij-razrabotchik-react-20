export function products(state=[], action) {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS':
			return action.products;
		case 'ADD_PRODUCT_SUCCESS':
			return state.concat(action.product);
		case 'UPDATE_PRODUCT_SUCCESS':
			const idUpdate = state.findIndex((product) => product.id === action.product.id);
			return idUpdate  < 0 ? state : [...state.slice(0, idUpdate), action.product, ...state.slice(idUpdate + 1)];
		case 'DELETE_PRODUCT_SUCCESS':
			const idDelete = state.findIndex((product) => product.id === action.product.id);
			return idDelete  < 0 ? state : [...state.slice(0, idDelete), ...state.slice(idDelete + 1)];
		default:
			return state;
	}
}

export function productsHasErrored(state=false, action) {
	switch (action.type) {
		case 'GET_PRODUCTS_REJECTED':
		case 'ADD_PRODUCT_REJECTED':
		case 'UPDATE_PRODUCT_REJECTED':
		case 'DELETE_PRODUCT_REJECTED':
			return action.hasErrored;
		default:
			return state;
	}
}
