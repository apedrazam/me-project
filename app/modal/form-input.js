import React from 'react';

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			name: '',
			email: '',
			message: ''
			// alert:{
			// 	type: 'info',
			// 	text: ''	
			// }
		};
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			name: 'event.target.value',
			email: 'event.target.value',
			message: 'event.target.value'
			// alert:{
			// 	type: 'info',
			// 	text: 'Sending...'
			// }
		});
		this.sendFormData();
	}
	handleChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}
	sendFormData () {
		// Send the form data.
		var xmlhttp = new XMLHttpRequest();
		var _this = this;
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				var response = JSON.parse(xmlhttp.responseText);
				if (xmlhttp.status === 200 && response.status === 'OK') {
					// _this.setState({
					// 	type: 'success',
					// 	message: 'Your message has been sent! I will answer you back shortly. Thanks!'
					// });
				}
				else {
					// _this.setState({
					// 	type: 'danger',
					// 	message: 'Something went wrong... Please, try again. Also, you can write me to hello@hyphenfrog.com'
					// });
				}
			}
		};
		xmlhttp.open('POST', 'send', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(this.requestBuildQueryString(this.state));
	}
	requestBuildQueryString(params) {
		var queryString = [];
		for(var property in params)
			if (params.hasOwnProperty(property)) {
				queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
			}
		return queryString.join('&');
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
					<input className="form-input" required value={this.state.name} onChange={this.handleChange.bind(this, 'name')} type="name" placeholder="Name" />
					<input className="form-input" required value={this.state.email} onChange={this.handleChange.bind(this, 'email')} type="email" placeholder="Email" />
					<textarea className="form-input" required value={this.state.message} onChange={this.handleChange.bind(this, 'message')} rows="5" placeholder="Write me a message..." />
					<button className="action-btn" type="submit">Send</button>
				</form>
			</div>
		)
	}
}

export default FormInput;