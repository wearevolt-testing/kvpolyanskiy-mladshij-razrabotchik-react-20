import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import {customers, customersHasErrored} from './reducers/customer-reducers';
import {products, productsHasErrored} from './reducers/product-reducers';
import productsSaga from './sagas/products-sagas';

const reducers = combineReducers({
	customers,
	customersHasErrored,
	products,
	productsHasErrored
});

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(thunk, logger, sagaMiddleware);

const store = createStore(reducers, middleware);

sagaMiddleware.run(productsSaga);

export default store;
