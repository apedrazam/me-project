import React from 'react';

class Stars extends React.Component {
	render() {
		return(
			<span>{this.props.level}</span>
		)
	}
}

export default Stars;