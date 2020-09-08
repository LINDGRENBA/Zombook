import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
	return (
		<React.Fragment>
			<h3>{props.name}</h3>
			<h5>{props.favoriteAnimal}</h5>
			<p>{props.mood}</p>
		</React.Fragment>
	);
}

Friend.protoTypes = {
	name: PropTypes.string,
	favoriteAnimal: PropTypes.string,
	mood: PropTypes.string,
};

export default Friend;
