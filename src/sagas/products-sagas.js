import 'regenerator-runtime/runtime';
import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getProducts(action) {
	try {
		const res = yield call(axios.get, '/api/products');
		yield put({type: 'GET_PRODUCTS_SUCCESS', products: res.data});
	} catch (e) {
		yield put({type: 'GET_PRODUCTS_REJECTED', hasErrored: true});
	}
}

function* createProduct(action) {
	try {
		const res = yield call(axios.post, '/api/products', action.product);
		yield put({type: 'ADD_PRODUCT_SUCCESS', product: res.data});
	} catch (e) {
		yield put({type: 'ADD_PRODUCT_REJECTED', hasErrored: true});
	}
}

function* updateProduct(action) {
	try {
		const res = yield call(axios.put, `/api/products/${action.product.id}`, action.product);
		yield put({type: 'UPDATE_PRODUCT_SUCCESS', product: res.data});
	} catch (e) {
		yield put({type: 'UPDATE_PRODUCT_REJECTED', hasErrored: true});
	}
}


function* deleteProduct(action) {
	try {
		const res = yield call(axios.delete, `/api/products/${action.product.id}`);
		yield put({type: 'DELETE_PRODUCT_SUCCESS', product: res.data});
	} catch (e) {
		yield put({type: 'DELETE_PRODUCT_REJECTED', hasErrored: true});
	}
}

function* productsSaga() {
	yield [
		 takeEvery('GET_PRODUCTS', getProducts),
		 takeEvery('ADD_PRODUCT', createProduct),
		 takeEvery('UPDATE_PRODUCT', updateProduct),
		 takeEvery('DELETE_PRODUCT', deleteProduct)
	]
}

export default productsSaga;
