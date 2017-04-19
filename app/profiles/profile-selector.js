import React from 'react';

import ProfileBoard from './profile-board.js';
import ProfileData from './profiles.json';

//ADD KEYBOARD NAVIGATION

class ProfileList extends React.Component {
	render() {
		var profileItem = this.props.ProfileData.map(function(profile) {
			return (
				//to be fixed when onClick decides to work out of button element
				<div className="profile-button-container" key={profile.id}>
				<img className="profile-button-img" src={profile.thumbnailURL} />
				<button className="profile-button" value={profile.id} title={profile.name} onClick={this.props.chooseProfile} >
				</button>
				</div>
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
				<ProfileBoard selected={this.state} nextProfile={this.next} previousProfile={this.previous} />
			</section>
		)
	}
}

export default ProfileSelector;