import React from 'react';

class ActionButton extends React.Component {
	render() {
		return(
			<button className={this.props.category} onClick={this.props.action}>
			<div className="media-btn-circle">
					<img src={this.props.image} alt={this.props.name} />
				</div>
			</button>
		)
	}
}

export default ActionButton;