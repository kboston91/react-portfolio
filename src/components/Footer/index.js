import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/kboston91"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("/Users/kourtneyboston/Desktop/projects/react-portfolio/src/assets/logos/github-logo.png")}
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
						src={require("/Users/kourtneyboston/Desktop/projects/react-portfolio/src/assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;