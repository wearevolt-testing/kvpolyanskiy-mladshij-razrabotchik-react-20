import {createStore, combineReducers, applyMiddleware} from 'redux';
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

let middleware = [thunk, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middleware = [ ...middleware, logger];
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(productsSaga);

export default store;
