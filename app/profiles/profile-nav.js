import React from 'react';

import ActionButton from '../buttons/action-button.js';

class ProfileNav extends React.Component {
	render() {
		return(
			<div className="profile-navigation">
				<button className="prev-profile" onClick={this.props.previousProfile}>
					<img src="./assets/images/prev-profile.svg" alt="<" />
				</button>
				<button className="next-profile" onClick={this.props.nextProfile}>
					<img src="./assets/images/next-profile.svg" alt=">" />
				</button>
			</div>
		)
	}
}

export default ProfileNav;