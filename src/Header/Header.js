import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
	render() {
		return (
			<Navbar brand='Yana Giphy' right>
				<NavItem onClick={() => console.log('test click')}>Trending</NavItem>
				<NavItem href=''>Random</NavItem>
			</Navbar>
		);
	}
}

export default Header;
