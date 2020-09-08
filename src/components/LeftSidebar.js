import React from 'react';
import Profile from './Profile';
import Bio from './Bio';

function LeftSidebar() {
	return (
		<React.Fragment>
			<Profile />
			<Bio />
		</React.Fragment>
	);
}

export default LeftSidebar;
