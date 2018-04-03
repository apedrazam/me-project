import React from 'react';

import About from './about.js';
import Button from '../buttons/action-button.js';
//import CloseButton from '../buttons/close-button.js';
import FormInput from './form-input.js';

class Modal extends React.Component {
	render() {
		return(
			<div className={this.props.modalData.isModalOpen}>
				<div className="modal-wrapper">
					<div className="modal-box">
						<div className="modal-container" onClick={this.props.closeAction}>
							<div className ="modal-header">
								<Button name="Close modal" category="close-btn" action={this.props.closeAction} image="./assets/images/close.svg" />
								<h2>{this.props.modalData.title}</h2>
							</div>
							<div className="modal-content">
								{ this.props.modalData.formModal ? (
									<FormInput />
								) : (
									<About />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;