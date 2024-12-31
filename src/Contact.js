import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px",
        background: "#c8b6a6", // Very light pastel brown
        color: "#8C5C3C", // Rich brown text color
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
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
        Contact Me
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/hsu01"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#8C5C3C",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            style={{ width: "30px" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hsuwaihninkyaw/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#8C5C3C",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            style={{ width: "30px" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="mailto:hsu01@uw.edu"
          style={{
            textDecoration: "none",
            color: "#8C5C3C",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            style={{ width: "30px" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            hsu01@uw.edu
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+12085187634"
          style={{
            textDecoration: "none",
            color: "#8C5C3C",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Phone"
            style={{ width: "30px" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            +1 (208) 518-7634
          </span>
        </a>
      </div>
    
      <style>
        {`
          @media (max-width: 768px) {
            #contact {
              padding: 50px 10px;
            }

            #contact h1 {
              font-size: 30px;
            }

            #contact a {
              font-size: 16px;
            }

            #contact img {
              width: 25px;
              height: 25px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
