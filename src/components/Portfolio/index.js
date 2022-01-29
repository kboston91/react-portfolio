import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Budget Tracker',
			description:
				'This is a property management system that is used by landlords viewing and managing their properties and for tenants to allow for maintenance requests and pay rent.',
			image: 'Budget Tracker.mp4',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'NoSQL',
				'Heroku',
				'PWA'
			],
			github: 'https://github.com/kboston91/budget-tracker',
			
		},
		{
			name: 'Gale Weather App',
			description:
				'Customizable weather dashboard',
			image: 'Gale Weather App.mp4',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'GraphQL',
				'Express',
        'MongoDB',
				'Heroku',
        'Material UI',
        'MERN Stack'
			],
			github: 'https://github.com/kboston91/gale-weather-app',
		},
		{
			name: 'RVnGo',
			description:
				'Airbnb for RVs',
			image: 'Home.mp4',
			technologies: ['HTML/CSS', 'JavaScript', 'Express', 'SQL', 'Node.js', 'Sequelize'],
			github: 'https://github.com/project-2-Glampers/RVnG',
		},
		{
			name: 'Plan My Day',
			description:
				'App designed to give you things to do for any city input.',
			image: 'Plan My Day.mp4',
			technologies: [
				'HTML and CSS',
        'Javascript'
			],
			github: 'https://github.com/kboston91/plan-my-day',
			
		},
		{
			name: 'Run Buddy',
			description:
				'An app designed for runners and those looking for run coaches.',
			image: 'Run Buddy.mp4',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/kboston91/run-buddy',
		},
		{
			name: 'Weather App',
			description:
				'Current weather and 5 day forecast site',
			image: 'Weather App.mp4',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/kboston91/weather-app',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;