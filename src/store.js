import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import customersReducer from './reducers/customers-reducer';
import productsReducer from './reducers/products-reducer';

const reducers = combineReducers({
	customers: customersReducer,
	products: productsReducer
});

const middleware = applyMiddleware(logger);

export default createStore(reducers, middleware);
