import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store';

import Main from './components/main';
import Invoices from './components/invoices';
import Products from './components/products';
import Customers from './components/customers/customers';

import 'react-select/dist/react-select.css';

const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Invoices} />
				<Route path="/invoices" component={Invoices} />
				<Route path="/products" component={Products} />
				<Route path="/customers" component={Customers} />
			</Route>
		</Router>
	</Provider>
);

render(
	router,
	document.getElementById('app-root')
);
