import React from 'react';

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			type: 'info',
			message: ''
		};
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			type: 'info',
			message: 'Sending...'
		});
		this.sendFormData();
	}
	sendFormData () {
		var formData = {
			name: React.findDOMNode(this.refs.name).value,
			email: React.findDOMNode(this.refs.email).value,
			message: React.findDOMNode(this.refs.message).value
		};
		// Send the form data.
		var xmlhttp = new XMLHttpRequest();
		var _this = this;
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				var response = JSON.parse(xmlhttp.responseText);
				if (xmlhttp.status === 200 && response.status === 'OK') {
					_this.setState({
						type: 'success',
						message: 'Your message has been sent! I will answer you back shortly. Thanks!'
					});
				}
				else {
					_this.setState({
						type: 'danger',
						message: 'Something went wrong... Please, try again. Also, you can write me to hello@hyphenfrog.com'
					});
				}
			}
		};
		xmlhttp.open('POST', 'send', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(this.requestBuildQueryString(formData));
	}
	render() {
		if (this.state.type && this.state.message) {
			var classString = 'alert-' + this.state.type;
			var status =
				<div id="status" className={classString} ref="status">
					{this.state.message}
				</div>;	
		}
		return(
			<div className="form-container">
				<p>If you want to hire me, discuss about something or any other thing, write me here. I will answer as soon as possible.</p>
				{status}
				<form id="contact-form" onSubmit={this.handleSubmit}>
					<input className="form-input" required ref="name" type="name" placeholder="Name" />
					<input className="form-input" required ref="email" type="email" placeholder="Email" />
					<textarea className="form-input" required ref="message" rows="5" placeholder="Write me a message..." />
					<button className="submit-btn" type="submit">Send</button>
				</form>
			</div>
		)
	}
}

export default FormInput;