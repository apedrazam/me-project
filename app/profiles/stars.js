import React from 'react';

class Stars extends React.Component {
	render() {
		var starsLevel = this.props.level*20;
		var starsLevelEmpty = starsLevel+1;
		var starsStyle = {
			background: '-webkit-linear-gradient(90deg, red, red ' + starsLevel + '%, #828282 ' + starsLevelEmpty + '%, #828282 100%)',
			background: '-o-linear-gradient(90deg, red, red ' + starsLevel + '%, #828282 ' + starsLevelEmpty + '%, #828282 100%)',
			background: '-moz-linear-gradient(90deg, red, red ' + starsLevel + '%, #828282 ' + starsLevelEmpty + '%, #828282 100%)',
			background: 'linear-gradient(90deg, red, red ' + starsLevel + '%, #828282 ' + starsLevelEmpty + '%, #828282 100%)'
		}
		return(
			<div className="stars-container" style={starsStyle}>
				<img src="./assets/images/stars.svg" className="stars-mask" alt={this.props.level} />
			</div>
			//<span>{this.props.level}</span>
		)
	}
}

export default Stars;