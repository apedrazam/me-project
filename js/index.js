import React from 'react';
import { render } from 'react-dom';

import ActionButton from './action-button.js';
import Footer from './footer.js';
import Header from './header.js';
import Modal from './modal.js';
import ProfilesBoard from './profiles-board.js';


render(
	<ProfilesBoard/>,
	document.getElementById("app")
);