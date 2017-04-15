import React from 'react';

import ActionButton from '../buttons/action-button.js';

class ProfileNav extends React.Component {
	render() {
		return(
			<div className="profile-navigation">
				<ActionButton value="Previous Profile" category="prev-profile" action={this.props.previousProfile} />
				<ActionButton value="Next Profile" category="next-profile" action={this.props.nextProfile} />
			</div>
		)
	}
}

export default ProfileNav;