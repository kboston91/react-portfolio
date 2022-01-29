import React from 'react';
import Portrait from './portrait.png'

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center" className=''>
				<img
					src={Portrait}
					alt="about-me"
					className="photo"
          height={500}
          
				/>
			</div>
			<div>
			<p>
      Kourtney Boston is an entry level Front-End Web Developer eager to gain experience in the field.
          Recently, she completed the Full Stack Web Development Program at UT Austin, where she learned new coding languages
          and added many projects to her portfolio. Her background working in both client facing and employee facing roles make
          her an excellent communicator and problem solver. She is driven by making her clients happy, and keeping her team grounded and on track.
          Kourtney specializes in designing graphics and the look of an application, but is also dedicated to perfecting the functionality of it as well.
          Kourtney is open to new and exciting opportunities where she can learn, thrive, and help her clientele at the same time.
      </p>
			</div>
		</section>
	);
}

export default About;
