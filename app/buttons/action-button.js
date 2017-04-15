import React from 'react';

class ActionButton extends React.Component {
	render() {
		return(
			<button className={this.props.category} onClick={this.props.action}>
				{this.props.value}
			</button>
		)
	}
}

export default ActionButton;