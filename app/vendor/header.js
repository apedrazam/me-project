import React from 'react';

class Header extends React.Component {
	render() {
		return(
			<header className="header">
				<h1>{this.props.title}</h1>
				<h4>{this.props.subtitle}</h4>
			</header>

		)
	}
}

export default Header;