import React from 'react';
import Friend from './Friend';

const mainFriendsList = [
	{
		name: 'Zombie Unicorn',
		favoriteAnimal: 'Unicorns',
		mood: 'Hangry',
	},
	{
		name: 'Party Squirrel',
		favoriteAnimal: 'Squirrels',
		mood: 'In the mood to party',
	},
	{
		name: 'Zombie Girl',
		favoriteAnimal: 'Matilda the Mammoth',
		mood: 'macabre',
	},
];

function SuggestedFriends() {
	return (
		<React.Fragment>
			<hr />
			{mainFriendsList.map((friends, index) => (
				<Friend
					name={friends.name}
					favoriteAnimal={friends.favoriteAnimal}
					mood={friends.mood}
					key={index}
				/>
			))}
		</React.Fragment>
	);
}

export default SuggestedFriends;
