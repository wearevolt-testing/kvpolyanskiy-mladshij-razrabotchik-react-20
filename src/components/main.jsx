import React from 'react';
import {Grid} from 'react-bootstrap';

import Menu from './menu';
import Footer from './footer';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Menu />
					{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Main;
