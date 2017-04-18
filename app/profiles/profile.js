import React from 'react';

import Image from './image.js';
import ProfileSkills from './skills.js';

class Profile extends React.Component {
	render() {
		return(
			<div className="profile">
				<Image imagePath={this.props.data.imageURL} imageAlt={this.props.data.name} />
				<div className="profile-information">
					<div className="profile-name">
						<h2>{this.props.data.name}</h2>
					</div>
					<div className="profile-description">{this.props.data.description}</div>
					<ProfileSkills skills={this.props.data.skillsCategories} />
				</div>
			</div>
		)
	}
}

export default Profile;