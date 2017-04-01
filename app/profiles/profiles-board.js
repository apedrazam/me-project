import React from 'react';
import Axios from 'axios';

import Profile from './profile.js';
import ProfileSelector from './profile-selector.js';

import profiles from './profiles.json';

// const profiles = axios.get(./profiles.json);

class ProfilesBoard extends React.Component {
	render() {
		return(
			<div>
				<p>Texto de ProfilesBoard</p>
				<Profile/>
			</div>
		)
	}
}

export default ProfilesBoard;