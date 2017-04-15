import React from 'react';

import Image from './image.js';
import ProfileSkills from './skills.js';
import ProfileNav from './profile-nav.js';


class Profile extends React.Component {
	render() {
		return(
			<div className="profile-container">
				<Image imagePath={this.props.data.imageURL} />
				<div className="profile-information">
					<h2>{this.props.data.name}</h2>
					<div className="profile-description">{this.props.data.description}</div>
					<ProfileSkills skills={this.props.data.skillsCategories} />
				</div>
			</div>
		)
	}
}

export default Profile;