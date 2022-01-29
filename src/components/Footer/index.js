import React from "react";
import LinkedinLogo from './linkedin-logo.png';
import gitHubLogo from './github-logo.png';

function Footer() {
	return (
		<footer className="footer">
			<div >
				<a
					href="https://github.com/kboston91"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={gitHubLogo}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/kourtneyboston/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={LinkedinLogo}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;