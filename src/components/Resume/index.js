import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/resume/KBostonResCon.pdf")} download>
					<h4>Resume Download</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Skills</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>React</li> 
				</ol>
				<br></br>
				<h5>Back-End Skills</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Skills</h5>
				<ol>
					<li>Git</li>
					<li>NPM</li>
				</ol>
				<br></br>
				<h5>Database Skills</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;