import React from 'react';

import About from './about.js';
import ActionButton from '../buttons/action-button.js';
//import CloseButton from '../buttons/close-button.js';
import FormInput from './form-input.js';

class Modal extends React.Component {
	closeModal() {

	}

	render() {
		return(
			<div className="modal-bg" isModalOpen={modal.appear}>
				<div className="modal-container">
					<div className ="modal-header">
						<h2>{modal.title}</h2>
						<Button value="X" type="close-button" action={this.closeModal} />
					</div>
					<div className="modal-content">
						if(modal.formModal){
							return <FormInput />
						}
						return <About />
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;