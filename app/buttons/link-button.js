import React from 'react';

class LinkButton extends React.Component {
	render() {
		return(
			<a className={this.props.category} href={this.props.link} target={this.props.target} >
				<div className="media-btn-circle">
					<img src={this.props.image} alt={this.props.name} />
				</div>
			</a>
		)
	}
}

export default LinkButton;