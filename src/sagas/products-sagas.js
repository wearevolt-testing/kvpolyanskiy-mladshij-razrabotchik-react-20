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

function* productsSaga() {
	yield [
		 takeEvery('GET_PRODUCTS', getProducts)
	]
}

export default productsSaga;
