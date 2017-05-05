import React from 'react';

import ActionButton from '../buttons/action-button.js';
import LinkButton from '../buttons/link-button.js';
import Modal from '../modal/modal.js';

class MainActions extends React.Component {
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
		document.getElementById("app").classList.add("modal-is-open");
	}
	contactModal(e) {
		this.setState({
			isModalOpen:'show-modal',
			formModal: true,
			title: 'CONTACT'
		});
		document.getElementById("app").classList.add("modal-is-open");
	}
	closeModal(e) {
		this.setState({ isModalOpen:'hide-modal' });
		document.getElementById("app").classList.remove("modal-is-open");
	}
	render() {
		return(
			<section  className="main-actions">
				<div className="main-actions-container">
					<LinkButton value="Contact" category="action-btn" link="mailto:hello@hyphenfrog.com" target="_self" />
					<LinkButton value="Download CV" category="action-btn" link="./assets/AdrianPedrazaCV.pdf" target="_blank" />
					<ActionButton value="About" category="action-btn" action={this.aboutModal} />
				</div>
				<Modal modalData={this.state} closeAction={this.closeModal} />
			</section>

		)
	}
	//Contact form. Pending of implementation of service
	//<ActionButton value="Contact" category="action-btn" action={this.contactModal} />
}

export default MainActions;