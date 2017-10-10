export function products(state=[], action) {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS':
			return action.products;
		default:
			return state;
	}
}

export function productsHasErrored(state=false, action) {
	switch (action.type) {
		case 'GET_PRODUCTS_REJECTED':
			return action.hasErrored;
		default:
			return state;
	}
}
