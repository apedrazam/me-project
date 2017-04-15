import React from 'react';

class Button extends React.Component {
	render() {
		return(
			<button className={this.props.type} onClick={this.props.action}>
				{this.props.value}
			</button>
		)
	}
}

export default Button;