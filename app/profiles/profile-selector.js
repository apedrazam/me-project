import React from 'react';

import Thumbnail from './thumbnail.js';
import ProfileBoard from './profile-board.js';
import ProfileData from './profiles.json';

//ADD KEYBOARD NAVIGATION

class ProfileList extends React.Component {
	render() {
		var profileItem = this.props.ProfileData.map(function(profile) {
			return (
				<button key={profile.id} value={profile.id} title={profile.name}
				onClick={this.props.chooseProfile}>
					{profile.name}
				</button>
			)
 		}.bind(this));
 		return (
 			<div className="profile-buttons">
				{profileItem}
			</div>
 		)
	}
}

class ProfileSelector extends React.Component{
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
		this.state = ProfileData[0];
	}
	onClick(e) {
		this.setState(ProfileData[e.target.value]);
	}
	render() {
		return (
			<section className="profile-selection">
				<ProfileList ProfileData={ProfileData} chooseProfile={this.onClick} />
				<ProfileBoard selected={this.state} />
			</section>
		)
	}
}

export default ProfileSelector;