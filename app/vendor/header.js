import React from 'react';

import Button from '../buttons/action-button.js';
import Modal from '../modal/modal.js';

class Header extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	//this.onClick = this.onClick.bind(this)
	// }
	openModal(){
		var formModal = undefined;
		alert('Open Modal');
		console.log(formModal);
	}
	download(){
		alert('Download CV File');
	}
	render() {
		return(
			<header>
				<h1>{this.props.title}</h1>
				<Button value="?" type="info-btn" action={this.aboutModal} />
				<div className="main-actions">
					<Button value="Contact" type="action-btn" action={this.contactModal} />
					<Button value="Download CV" type="action-btn" action={this.download} />
				</div>
			</header>

		)
	}
}

export default Header;