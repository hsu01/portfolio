import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px",
        background: "#FAF3E0", // Lighter pastel brown
        color: "#8C5C3C", // Rich brown text color
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#A97155", // Warm brown heading
          textAlign: "center",
          marginBottom: "50px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          width: "90%",
          margin: "0 auto",
        }}
      >
        {/* Current Project */}
        <div
          style={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              color: "#8C5C3C",
              marginBottom: "10px",
            }}
          >
            Portfolio Website
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6F4F37",
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            This is my first project: a personal portfolio website showcasing my
            skills, education, and journey as a developer. Built with React and
            deployed using GitHub Pages, it represents my efforts to break into
            web development.
          </p>
          <a
            href="https://hsu01.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#A97155",
              fontSize: "18px",
              fontWeight: "bold",
              borderBottom: "2px solid #A97155",
            }}
          >
            View Project
          </a>
        </div>

        {/* Placeholder for Future Projects */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            opacity: "0.6",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "#8C5C3C",
              marginBottom: "10px",
            }}
          >
            More Projects Coming Soon...
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6F4F37",
              maxWidth: "600px",
            }}
          >
            Stay tuned for future updates as I continue building projects and
            enhancing my skills. New and exciting things are on the way!
          </p>
        </div>
      </div>
    
      <style>
        {`
          @media (max-width: 768px) {
            #projects {
              padding: 50px 20px;
            }

            #projects h1 {
              font-size: 30px;
            }

            #projects h2 {
              font-size: 22px;
            }

            #projects p {
              font-size: 14px;
            }

            #projects a {
              font-size: 16px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
