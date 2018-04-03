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
					<div className="media-container">
						<ActionButton title="About" name="About" category="media-btn" action={this.aboutModal} image="./assets/images/question.svg" />
						<LinkButton title="Download CV" name="Download CV" category="media-btn" link="./assets/AdrianPedrazaCV.pdf" image="./assets/images/curriculum.svg" target="_blank" />
						<LinkButton title="Email" name="Mail" category="media-btn" link="mailto:hello@apedraza.net" image="./assets/images/envelope.svg"  target="_self" />
						<LinkButton title="LinkedIn" name="LinkedIn" category="media-btn" link="https://www.linkedin.com/in/adrianpedrazam/" image="./assets/images/linkedin-in.svg"  target="_blank" />
						<LinkButton title="Github" name="Github" category="media-btn" link="https://github.com/hyphenfrog/me-project" image="./assets/images/github-alt.svg"  target="_blank" />
					</div>
				</div>
				<Modal modalData={this.state} closeAction={this.closeModal} />
			</section>

		)
	}
	//Contact form. Pending of implementation of service
	//<ActionButton value="Contact" category="action-btn" action={this.contactModal} />
}

export default MainActions;