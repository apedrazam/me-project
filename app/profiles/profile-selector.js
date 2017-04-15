import React from 'react';

import Thumbnail from './thumbnail.js';
import ProfileBoard from './profile-board.js';
import ProfileData from './profiles.json';
import ProfileNav from './profile-nav.js';

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
		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
		this.state = ProfileData[0];
	}
	onClick(e) {
		this.setState(ProfileData[e.target.value]);
	}
	next(e){
		var currentProfile = this.state.id+1;
		if (currentProfile > 10) {
			currentProfile = 0;
			this.setState(ProfileData[currentProfile]);		
		} else {
			this.setState(ProfileData[currentProfile]);
		}
	}
	previous(e){
		var currentProfile = this.state.id-1;
		if (currentProfile < 0) {
			currentProfile = 10;
			this.setState(ProfileData[currentProfile]);		
		} else {
			this.setState(ProfileData[currentProfile]);
		}
	}
	render() {
		return (
			<section className="profile-selection">
				<ProfileList ProfileData={ProfileData} chooseProfile={this.onClick} />
				<ProfileBoard selected={this.state} />
				<ProfileNav nextProfile={this.next} previousProfile={this.previous} /> 
			</section>
		)
	}
}

export default ProfileSelector;