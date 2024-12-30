import React from 'react';
import ProfileImage from './Profile.jpg';

function About() {
  return (
    <section
      id="about"
      style={{
        padding: '100px',
        background: '#F0DBC5',
        color: 'black',
        textAlign: 'center',
      }}
    >
      {/* Circular Profile Image */}
      <img
        src={ProfileImage}
        alt="Profile"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '70%',
          border: '5px solid white',
          marginBottom: '1px',
        }}
      />
      {/* Large Name */}
      <h1
        style={{
          fontSize: '60px',
          color: '#282c34',
          fontFamily: "Anta",
        }}
      >
        Hsu Wai Hnin Kyaw
      </h1>
      {/* Additional Description */}
      <p 
      style={{ 
        fontSize: '17px', 
        fontFamily:"Martel", 
        maxWidth: '800px', 
        margin: '0 auto' }}>

       Hello, I am Hsu Wai Hnin Kyaw (people call me "Sue"), a junior computer science student at the University of Washington, Seattle. 
        I am currently working on exciting projects and always eager to learn and explore more 
        about technology. Aside from technology, I love oil painting, playing badminton, exploring restaurants, 
        and practicing photography. These interests inspire me to approach technology with creativity 
        and curiosity!
      </p>
    </section>
   
  );
  
}

export default About;
