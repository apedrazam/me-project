import React from 'react';

import About from './about.js';
import Button from '../buttons/action-button.js';
//import CloseButton from '../buttons/close-button.js';
import FormInput from './form-input.js';

class Modal extends React.Component {
	closeModal() {
		alert('Closing Modal! someday');
	}

	render() {
		return(
			<div className="modal-bg">
				<div className="modal-container">
					<div className ="modal-header">
						<h2>{this.props.title}</h2>
						<Button value="X" type="close-button" action={this.closeModal} />
					</div>
					<div className="modal-content">
						{ this.props.formModal ? (
							<FormInput />
						) : (
							<About />
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;