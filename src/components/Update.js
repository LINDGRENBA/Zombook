import React from 'react';
import PropTypes from 'prop-types';

function Update(props) {
	return (
		<React.Fragment>
			<h3>{props.username}</h3>
			<p>{props.message}</p>
		</React.Fragment>
	);
}

Update.propTypes = {
	username: PropTypes.string,
	message: PropTypes.string,
};

export default Update;
