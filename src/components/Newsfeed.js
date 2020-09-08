import React from 'react';
import UpdateList from './UpdateList';
import PostUpdate from './PostUpdate';

function Newsfeed() {
	return (
		<React.Fragment>
			<PostUpdate />
			<UpdateList />
		</React.Fragment>
	);
}

export default Newsfeed;
