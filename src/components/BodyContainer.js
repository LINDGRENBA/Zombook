import React from 'react';
import LeftSidebar from './LeftSidebar';
import Newsfeed from './Newsfeed';
// import RightSidebar from './RightSidebar';

function BodyContainer() {
	return (
		<React.Fragment>
			<LeftSidebar />
			<Newsfeed />
			{/* <RightSidebar /> */}
		</React.Fragment>
	);
}

export default BodyContainer;
