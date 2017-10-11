export function getProducts() {
	return {type: 'GET_PRODUCTS'};
}

export function addProduct(product) {
	return {
		type: 'ADD_PRODUCT',
		product
	}
}

export function updateProduct(product) {
	return {
		type: 'UPDATE_PRODUCT',
		product
	}
}

export function deleteProduct(product) {
	return {
		type: 'DELETE_PRODUCT',
		product
	}
}
