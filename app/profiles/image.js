import React from 'react';

class Image extends React.Component {
	render() {
		return(
			<div className="profile-image">
				<img src={this.props.imageURL} />
			</div>
		)
	}
}

export default Image;