import React from "react";

// Reusable ProjectCard Component with Modern Design
const ProjectCard = ({ title, period, description, technologies, githubLink, websiteLink, imageUrl, index }) => (
  <div
    style={{
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '35px',
      marginBottom: '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      transition: 'all 0.4s ease',
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
      animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
    }}
    className="project-card"
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 15px 45px rgba(169, 113, 85, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
    }}
  >
    {/* Card Content */}
    <div style={{ flex: 1 }}>
      {/* Title with Gradient */}
      <h2
        style={{
          fontSize: '32px',
          background: 'linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '12px',
          fontFamily: 'Poppins',
          fontWeight: '700',
        }}
        className="project-title"
      >
        {title}
      </h2>

      {/* Period with Badge Style */}
      <div
        style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: 'rgba(169, 113, 85, 0.1)',
          borderRadius: '20px',
          fontSize: '13px',
          color: '#8C5C3C',
          fontWeight: '600',
          marginBottom: '20px',
          fontStyle: 'italic',
        }}
      >
        📅 {period}
      </div>
      
      {/* Description */}
      <p
        style={{
          fontSize: '16px',
          color: '#555',
          lineHeight: '1.8',
          marginBottom: '25px',
          fontFamily: "'Martel', serif",
        }}
        className="project-description"
      >
        {description}
      </p>
      
      {/* Technologies with Pills */}
      <div style={{ marginBottom: '25px' }}>
        <p
          style={{
            fontSize: '13px',
            color: '#8C5C3C',
            fontWeight: '700',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          🛠️ Tech Stack
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} className="tech-stack">
          {technologies.split(', ').map((tech, i) => (
            <span
              key={i}
              style={{
                padding: '6px 14px',
                background: 'linear-gradient(135deg, #F0DBC5 0%, #E8D5C4 100%)',
                borderRadius: '20px',
                fontSize: '13px',
                color: '#8C5C3C',
                fontWeight: '600',
                border: '1px solid rgba(169, 113, 85, 0.2)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="project-buttons">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #A97155 0%, #8C5C3C 100%)',
              color: '#FFF',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow: '0 8px 20px rgba(169, 113, 85, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(169, 113, 85, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(169, 113, 85, 0.3)';
            }}
          >
            <span>💻</span> View Code
          </a>
        )}
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 28px',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#A97155',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '14px',
              border: '2px solid #A97155',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
            <span>🚀</span> Live Demo
          </a>
        )}
      </div>
    </div>

    {/* Project Image with Modern Frame */}
    {imageUrl && (
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
        }}
        className="project-image-container"
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '380px',
            height: '280px',
            objectFit: 'contain',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
          }}
          className="project-image"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Decorative Corner */}
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #BC7C7C 0%, #A97155 100%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.3,
            zIndex: -1,
          }}
        />
      </div>
    )}
  </div>
);

function Projects() {
  const projects = [
    {
      title: "Purrfect Match 🐾",
      period: "Jan 2025 – Dec 2025",
      description: "Ever wanted to find the perfect playdate for your furry friend? This mobile app connects pet owners for playdates and community hangouts! With real-time updates and location-based filtering, your pet can finally have a social life as active as yours. We're even exploring AI to suggest the best meetup spots!",
      technologies: "React Native, Firebase, Firestore, Google Maps API",
      githubLink: "https://github.com/nbphuccc/PurrfectMatch",
      websiteLink: null,
      imageUrl: `${process.env.PUBLIC_URL}/purrfectmatch.png`
    },
    {
      title: "Campus Map Navigator",
      period: "Mar 2025 – Apr 2025",
      description: "Lost on campus? Not anymore! This full-stack web app finds the shortest path between any two buildings using the magic of Dijkstra's algorithm. No more wandering aimlessly—just plug in your start and end points, and let the app guide you. Perfect for those 10-minute class transitions!",
      technologies: "TypeScript, React, Express.js, Dijkstra's Algorithm, Mocha",
      githubLink: null,
      websiteLink: null,
      imageUrl: `${process.env.PUBLIC_URL}/campus.jpg`
    },
    {
      title: "Personal Portfolio Website ✨",
      period: "June 2024 – Present",
      description: "You're looking at it right now! This website is my digital home where I showcase my projects, skills, and journey. Built with React and lots of custom CSS magic, it's a work in progress (mobile optimization coming soon!). Think of it as my creative playground where I experiment with design and code.",
      technologies: "React, HTML, CSS, JavaScript",
      githubLink: null,
      websiteLink: "https://hsu01.github.io/portfolio/",
      imageUrl: `${process.env.PUBLIC_URL}/portfolio.png`
    },
    {
      title: "AI Pacman Pathfinding 👾",
      period: "Apr 2024 – Jun 2024",
      description: "Remember playing Pacman as a kid? Now imagine teaching Pacman to think strategically! This project implements classic search algorithms like DFS, BFS, and A* to help Pacman navigate mazes, find food, and avoid ghosts. It's like giving Pacman a brain upgrade!",
      technologies: "Python, BFS, DFS, Uniform Cost Search, A* Algorithm",
      githubLink: null,
      websiteLink: null,
      imageUrl: `${process.env.PUBLIC_URL}/pacman.gif`
    }
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '80px 20px 60px',
        background: 'linear-gradient(180deg, #FAF3E0 0%, #F0DBC5 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(188, 124, 124, 0.08)',
          filter: 'blur(80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(169, 113, 85, 0.08)',
          filter: 'blur(80px)',
        }}
      />

      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '70px', position: 'relative', zIndex: 1 }}>
        <h1
          style={{
            fontSize: '48px',
            background: 'linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '1px',
          }}
        >
          Featured Projects
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: '#8C5C3C',
            margin: '0 auto',
            fontFamily: "'Martel', serif",
          }}
        >
          A collection of things I've built with code, creativity, and a bit of caffeine ☕
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          #projects {
            padding: 60px 15px 40px !important;
          }
          
          #projects h1 {
            font-size: 32px !important;
            margin-bottom: 10px !important;
          }
          
          #projects > div:first-of-type {
            margin-bottom: 50px !important;
          }
          
          .project-card {
            flex-direction: column !important;
            padding: 25px !important;
            margin-bottom: 30px !important;
            gap: 25px !important;
          }
          
          .project-title {
            font-size: 24px !important;
          }
          
          .project-description {
            font-size: 12px !important;
          }
          
          .tech-stack span {
            font-size: 12px !important;
            padding: 5px 10px !important;
          }
          
          .project-buttons {
            flex-direction: column !important;
          }
          
          .project-buttons a {
            width: 100%;
            justify-content: center !important;
            padding: 10px 5px !important;
            font-size: 13px !important;
          }
          
          .project-image-container {
            width: 100% !important;
          }
          
          .project-image {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;