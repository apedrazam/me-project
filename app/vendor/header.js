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
		this.state = { isModalOpen:'hidden-modal' };
	}
	aboutModal(e) {
		this.setState({
			isModalOpen:'show-modal',
			formModal: false,
			title: 'ABOUT'
		});
	}
	contactModal(e) {
		this.setState({
			isModalOpen:'show-modal',
			formModal: true,
			title: 'CONTACT'
		});
	}
	closeModal(e) {
		this.setState({ isModalOpen:'modal-hidden' });
	}
	render() {
		return(
			<header>
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