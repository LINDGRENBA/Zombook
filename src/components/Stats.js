// tweets, following, followers
import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
	return (
		<React.Fragment>
			<p>{props.tweets}</p>
			<p>{props.following}</p>
			<p>{props.followers}</p>
		</React.Fragment>
	);
}

Stats.propTypes = {
	tweets: PropTypes.number,
	following: PropTypes.number,
	followers: PropTypes.number,
};

export default Stats;
