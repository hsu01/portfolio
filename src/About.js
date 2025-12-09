import React from 'react';
import ProfileImage from './Profile.jpg';

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F0DBC5 0%, #E8D5C4 50%, #D4C2B4 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '180px 20px 50px',
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(188, 124, 124, 0.1)',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(169, 113, 85, 0.1)',
          filter: 'blur(80px)',
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          maxWidth: '900px',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {/* Profile Image with Glassmorphism Effect */}
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '30px',
          }}
        >
          <img
            src={ProfileImage}
            alt="Hsu Wai Hnin Kyaw"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '6px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          {/* Animated Ring */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              border: '2px solid rgba(169, 113, 85, 0.3)',
              animation: 'pulse 2s infinite',
            }}
          />
        </div>

        {/* Name with Gradient Text */}
        <h1
          style={{
            fontSize: '64px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '700',
            background: 'linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px',
            lineHeight: '1.2',
          }}
        >
          Hsu Wai Hnin Kyaw
        </h1>

        {/* Animated Subtitle */}
        <div
          style={{
            fontSize: '20px',
            color: '#8C5C3C',
            fontWeight: '500',
            marginBottom: '40px',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span style={{ display: 'inline-block', animation: 'fadeInUp 0.6s ease 0.2s both' }}>
            CS Student @ UW Seattle
          </span>
          <span style={{ margin: '0 10px', color: '#BC7C7C' }}>•</span>
          <span style={{ display: 'inline-block', animation: 'fadeInUp 0.6s ease 0.4s both' }}>
            Full Stack Developer
          </span>
          <span style={{ margin: '0 10px', color: '#BC7C7C' }}>•</span>
          <span style={{ display: 'inline-block', animation: 'fadeInUp 0.6s ease 0.6s both' }}>
            Pixel Perfectionist
          </span>
        </div>

        {/* Bio Text with Glass Card Effect */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            marginBottom: '40px',
            animation: 'fadeInUp 0.8s ease 0.8s both',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#555',
              fontFamily: "'Martel', serif",
              margin: 0,
            }}
          >
            Hey! I'm Hsu, a Computer Science senior at University of Washington Seattle, full stack developer, and part-time pixel perfectionist. 
            I love building playful, intuitive interfaces—whether it's a campus map app, a pet playdate 
            app, or a self-service policy onboarding system (shoutout to my Amazon internship 😌).
            <br /><br />
            I care a lot about good design, smooth user experiences, and solving real problems with a 
            mix of creativity and logic. Outside of code, you can find me traveling between Seattle and 
            LA, hanging out with my friends, curating the best food spots, or fixing my resume at 3AM for absolutely no reason.
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '15px 35px',
              background: 'linear-gradient(135deg, #A97155 0%, #8C5C3C 100%)',
              color: '#FFF',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 10px 25px rgba(169, 113, 85, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(169, 113, 85, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(169, 113, 85, 0.3)';
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              padding: '15px 35px',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#A97155',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '16px',
              border: '2px solid #A97155',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A97155';
              e.currentTarget.style.color = '#FFF';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.color = '#A97155';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          #about {
            padding: 100px 15px 30px !important;
          }
          
          #about > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
            gap: 30px !important;
          }
          
          #about img {
            width: 200px !important;
            height: 200px !important;
          }
          
          #about h1 {
            font-size: 32px !important;
          }
          
          #about h2 {
            font-size: 20px !important;
          }
          
          #about p {
            font-size: 15px !important;
          }
      `}</style>
    </section>
  );
}

export default About;