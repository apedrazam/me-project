import React from 'react';

class Image extends React.Component {
	render() {
		return(
			<div className="profile-image">
				<img src={this.props.imagePath} alt={this.props.imageAlt} />
			</div>
		)
	}
}

export default Image;