import React from 'react';

import Profile from './profile.js';
import ProfileNav from './profile-nav.js';
import ProfileData from './profiles.json';


class ProfileBoard extends React.Component{
	render() {
 		return (
 			<div className="profile-container">
		 		<Profile data={this.props.selected} />
		 		<ProfileNav nextProfile={this.props.nextProfile} previousProfile={this.props.previousProfile} />
		 	</div>
 		)
	}

}

export default ProfileBoard;