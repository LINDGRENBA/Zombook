import React from 'react';
import Update from './Update';

const mainUpdateList = [
	{
		username: 'zombiegirl24',
		message:
			"I'm baby meditation pug la croix, narwhal celiac kombucha thundercats cray iceland roof party neutra chicharrones fixie. Activated charcoal cronut slow-carb small batch PBR&B etsy, literally mixtape brooklyn tumeric portland hella. Sriracha disrupt enamel pin, lomo iPhone you probably haven't heard of them af air plant activated charcoal chartreuse williamsburg readymade freegan. Tacos pinterest cardigan, williamsburg tumblr cred paleo tilde gentrify fam kinfolk next level retro.",
	},
	{
		username: 'zombieAngel',
		message:
			"Jianbing food truck coloring book iPhone polaroid. Readymade brooklyn put a bird on it, cardigan meditation pabst pork belly vegan PBR&B stumptown taxidermy keytar etsy sartorial tumblr. Before they sold out 90's brunch kickstarter scenester cornhole.",
	},
	{
		username: 'ZombieMonster2009',
		message:
			'Four loko photo booth keytar small batch narwhal. Kinfolk deep v adaptogen cloud bread. Edison bulb sartorial intelligentsia chicharrones heirloom synth leggings godard. DIY readymade organic yuccie. Actually hammock poutine tousled hexagon skateboard quinoa 3 wolf moon +1 beard unicorn.',
	},
	{
		username: 'undeadUnicorn',
		message:
			'Health goth hot chicken celiac chambray taiyaki. Ugh vinyl selvage, williamsburg cronut before they sold out microdosing. Hammock aesthetic XOXO prism ethical. Ethical adaptogen taxidermy VHS. Kale chips keffiyeh fam, green juice photo booth aesthetic trust fund food truck artisan before they sold out brooklyn lo-fi air plant street art.',
	},
];

function UpdateList() {
	return (
		<React.Fragment>
			<hr />
			{mainUpdateList.map((update, index) => (
				<Update
					username={update.username}
					message={update.message}
					key={index}
				/>
			))}
		</React.Fragment>
	);
}

export default UpdateList;
