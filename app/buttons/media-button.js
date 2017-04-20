import React from 'react';

class MediaButton extends React.Component {
	render() {
		return(
			<a className={this.props.category} href={this.props.link} target="blank_">
				<img src={this.props.image} alt={this.props.name} />
			</a>
		)
	}
}

export default MediaButton;