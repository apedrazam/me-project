import React from 'react';

import Profile from './profile.js';
import ProfileData from './profiles.json';


class ProfileBoard extends React.Component{
	render() {
 		return (
	 		<Profile data={this.props.selected} />
 		)
	}

}

export default ProfileBoard;