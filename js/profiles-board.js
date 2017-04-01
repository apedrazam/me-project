import React from 'react';
import Axios from 'axios';

import Profile from './profiles/profile.js';
import ProfileSelector from './profiles/profile-selector.js';

const profiles = axios.get(./profiles.json);

class ProfilesBoard extends React.Component {
	render() {
		return(
			<div>
				<p>Texto de ProfilesBoard</p>
				<Profile/>
			</div>
			<ul>

			</ul>
		)
	}
}

export default ProfilesBoard;