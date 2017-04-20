import React from 'react';

import MediaButton from '../buttons/media-button.js';


class Footer extends React.Component {
	render() {
		return(
			<div className="footer">
				<div className="media-container">
					<MediaButton name="LinkedIn" category="media-btn" link="https://www.linkedin.com/in/adrianpedrazam/" image="./assets/images/media-linkedin.svg" />
					<MediaButton name="Github" category="media-btn" link="https://github.com/hyphenfrog" image="./assets/images/media-github.svg" />
					<MediaButton name="Twitter" category="media-btn" link="https://twitter.com/hyphenfrog" image="./assets/images/media-twitter.svg" />
				</div>
				<div className="copy-text">
					&copy; hyphenfrog 2017
				</div>
			</div>
		)
	}
}

export default Footer;