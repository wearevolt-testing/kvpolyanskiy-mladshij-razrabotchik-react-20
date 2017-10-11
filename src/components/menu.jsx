import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

class Menu extends React.Component {
	render() {
		return (
			<Navbar staticTop>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/">Invoice App</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		        <NavItem eventKey={2} href="/products">Products</NavItem>
						<NavItem eventKey={2} href="/customers">Customers</NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		);
	}
}

export default Menu;
