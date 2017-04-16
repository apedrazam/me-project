require('./main.css');
require('./buttons/buttons.css');
require('./profiles/profiles.css');
require('./modal/modal.css');


import React from 'react';
import { render } from 'react-dom';

import Footer from './vendor/footer.js';
import Header from './vendor/header.js';
import ProfileSelector from './profiles/profile-selector.js';

render(
	<div className="main-container">
		<Header title="CHOOSE YOUR PLAYER" />
		<ProfileSelector/>
	</div>,
	document.getElementById("app")
);