require('./main.css');

import React from 'react';
import { render } from 'react-dom';

import ActionButton from './buttons/action-button.js';
import Footer from './vendor/footer.js';
import Header from './vendor/header.js';
import Modal from './modal/modal.js';
import ProfileSelector from './profiles/profile-selector.js';


render(
	<ProfileSelector/>,
	document.getElementById("app")
);