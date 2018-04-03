import React from 'react';

class LinkButton extends React.Component {
	render() {
		return(
			<a className={this.props.category} href={this.props.link} target={this.props.target}>
				{this.props.value}
			</a>
		)
	}
}

export default LinkButton;