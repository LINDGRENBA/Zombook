import React from 'react';
import Stats from './Stats';

function Profile() {
	return (
		<React.Fragment>
			<Stats tweets={11} following={123} followers={5} />
		</React.Fragment>
	);
}

export default Profile;
