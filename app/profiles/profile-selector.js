import React from 'react';

import Thumbnail from './thumbnail.js';
import ProfileBoard from './profile-board.js';
import ProfileData from './profiles.json';


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
 			<div>
				{profileItem}
			</div>
 		)
	}
}

class ProfileSelector extends React.Component{
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
		this.state = {ProfileData};
		this.selectedProfile = ProfileData[0];
		console.log(this.selectedProfile);
	}
	onClick(e) {
		this.selectedProfile = ProfileData[e.target.value];
		console.log(this.selectedProfile);

	}
	render() {
		return (
			<div>
				<ProfileList ProfileData={ProfileData} chooseProfile={this.onClick} />
				<ProfileBoard />
			</div>
		)
	}
}


export default ProfileSelector;