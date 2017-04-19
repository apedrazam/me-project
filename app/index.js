require('./fonts.css');
require('./main.css');
require('./buttons/buttons.css');
require('./profiles/profiles.css');
require('./modal/modal.css');
require('./media-queries.css');

//Require from all /assets files
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/', true, /\.*$/));

import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-97694239-1');

import Footer from './vendor/footer.js';
import Header from './vendor/header.js';
import ProfileSelector from './profiles/profile-selector.js';

render(
	<div className="main-container">
		<Header title="CHOOSE YOUR ME" />
		<ProfileSelector/>
	</div>,
	document.getElementById("app")
);