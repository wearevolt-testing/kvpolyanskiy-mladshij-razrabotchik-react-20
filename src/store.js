import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {customers, customersHasErrored} from './reducers/customer-reducers';
import {products} from './reducers/product-reducers';

const reducers = combineReducers({
	customers,
	customersHasErrored,
	products
});

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducers, middleware);
