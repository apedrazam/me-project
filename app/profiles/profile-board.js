import React from 'react';

import Profile from './profile.js';
import ProfileData from './profiles.json';


class RepeatModule extends React.Component{
	render() {
 		return (
				<div>
					<h3>{this.props.name}</h3>
					<p>{this.props.desc}</p>
				</div>
 		)
	}

}

class ProfileBoard extends React.Component {
	render() {
		return(
			<RepeatModule />
		)
	}
}

export default ProfileBoard;