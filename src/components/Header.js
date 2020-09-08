import React from 'react';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import Tweets from './Tweets';

function Header() {
	return (
		<React.Fragment>
			<h1>Zombook</h1>
			<NavLinks />
			<SearchBar />
			<Tweets />
		</React.Fragment>
	);
}

export default Header;
