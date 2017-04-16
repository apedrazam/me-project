import React from 'react';

import ActionButton from '../buttons/action-button.js';
import LinkButton from '../buttons/link-button.js';
import Modal from '../modal/modal.js';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.aboutModal = this.aboutModal.bind(this)
		this.contactModal = this.contactModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.state = { isModalOpen:'hide-modal' };
	}
	aboutModal(e) {
		this.setState({
			isModalOpen:'show-modal',
			formModal: false,
			title: 'ABOUT'
		});
		//addClass in "app" for avoid scroll
	}
	contactModal(e) {
		this.setState({
			isModalOpen:'show-modal',
			formModal: true,
			title: 'CONTACT'
		});
		//addClass in "app" for avoid scroll
	}
	closeModal(e) {
		this.setState({ isModalOpen:'hide-modal' });
		//removeClass in "app" for enable scroll
	}
	render() {
		return(
			<header className="header">
				<h1>{this.props.title}</h1>
				<ActionButton value="?" category="info-btn" action={this.aboutModal} />
				<div className="main-actions">
					<ActionButton value="Contact" category="action-btn" action={this.contactModal} />
					<LinkButton value="Download CV" category="action-btn" link="./assets/AdrianPedrazaCV.pdf" />
				</div>
				<Modal modalData={this.state} closeAction={this.closeModal} />
			</header>

		)
	}
}

export default Header;