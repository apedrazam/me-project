import React from 'react';

import Image from './image.js';
import Info from './info.js';
import ProfileNav from './profile-nav.js';


class Profile extends React.Component {
	render() {
		return(
			<div>
				<p>Texto de Profile</p>
				<Info/>
			</div>
		)
	}
}

export default Profile;