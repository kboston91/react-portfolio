import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who is Kourtney Boston?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
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
