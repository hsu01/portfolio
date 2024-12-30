import React from "react";

function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 20px",
        background: "#F4EDE4", // Pastel brown background
        color: "#6C5B5B",
        textAlign: "left",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#B7796F",
          marginBottom: "50px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        Education
      </h1>

      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        {[
          {
            title: "Bachelor of Science in Computer Science",
            institution:
              "University of Washington, Paul G. Allen School of Computer Science & Engineering",
            date: "September 2024 - June 2026",
          },
          {
            title: "All Washington Academic Team: $9,000 Scholarship",
            institution:
              "Phi Theta Kappa Honor Society - One of the top 16 students in Washington State",
            date: "2024",
            isAward: true,
          },
          {
            title: "Associate’s Degree in Computer Science",
            institution: "Spokane Falls Community College",
            date: "April 2022 - June 2024",
          },
          {
            title: "Level 4 Diploma in Business IT",
            institution: "NCC Education, United Kingdom",
            date: "August 2018 - December 2020",
          },
          {
            title: "High School Diploma in General Studies",
            institution:
              "Practicing High School Yangon University of Education, Myanmar",
            date: "June 2007 - March 2018",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              padding: "20px 0",
              borderBottom: index !== 4 ? "1px solid #D4A59A" : "none",
              position: "relative",
            }}
          >
            {item.isAward && (
              <div
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#FFD700",
                  transform: "rotate(-10deg)",
                }}
              >
                Award
              </div>
            )}
            <h2
              style={{
                fontSize: "22px",
                color: "#6C5B5B",
                marginBottom: "5px",
                lineHeight: "1.2",
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#8A7A7A",
                marginBottom: "5px",
              }}
            >
              {item.institution}
            </p>
            <p style={{ fontSize: "14px", color: "#A49696" }}>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
