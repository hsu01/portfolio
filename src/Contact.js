import React from "react";

function Contact() {
  const contactLinks = [
    {
      icon: "💻",
      label: "GitHub",
      value: "@hsu01",
      url: "https://github.com/hsu01",
      color: "#333",
      hoverColor: "#000",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Hsu Wai Hnin Kyaw",
      url: "https://www.linkedin.com/in/hsuwaihninkyaw/",
      color: "#0077B5",
      hoverColor: "#005885",
    },
    {
      icon: "📧",
      label: "Email",
      value: "hsu01@uw.edu",
      url: "mailto:hsu01@uw.edu",
      color: "#A97155",
      hoverColor: "#8C5C3C",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@hsu_whk",
      url: "https://www.instagram.com/hsu_whk/",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #F0DBC5 0%, #E8D5C4 50%, #D4C2B4 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Blobs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(188, 124, 124, 0.1)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(169, 113, 85, 0.1)",
          filter: "blur(80px)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "48px",
              background: "linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              marginBottom: "15px",
              letterSpacing: "1px",
            }}
          >
            Let's Connect!
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#8C5C3C",
              fontFamily: "'Martel', serif",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            I'm always open to new opportunities, collaborations, or just a friendly chat ☕
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
          className="contact-grid"
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                textDecoration: "none",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
              }}
              className="contact-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 8px 30px ${link.color}30`;
                e.currentTarget.style.borderColor = link.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: `${link.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                }}
                className="contact-icon"
              >
                {link.icon}
              </div>

              {/* Text Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "4px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  className="contact-label"
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: link.color,
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  className="contact-value"
                >
                  {link.value}
                </div>
              </div>

              {/* Arrow Icon */}
              <div
                style={{
                  color: link.color,
                  fontSize: "20px",
                  opacity: 0.6,
                  transition: "all 0.3s ease",
                }}
                className="arrow"
              >
                →
              </div>
            </a>
          ))}
        </div>

        {/* Footer Message */}
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            padding: "30px",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
          className="contact-footer"
        >
          <p
            style={{
              fontSize: "16px",
              color: "#8C5C3C",
              margin: 0,
              fontFamily: "'Martel', serif",
              lineHeight: "1.6",
            }}
          >
            💡 <strong>Fun Fact:</strong> I respond fastest on LinkedIn, but email works great too!
            <br />
            Looking forward to hearing from you 🚀
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
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

        a:hover .arrow {
          transform: translateX(5px);
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          #contact {
            padding: 60px 15px !important;
            min-height: auto !important;
          }
          
          #contact > div > div:first-child {
            margin-bottom: 40px !important;
          }
          
          #contact h1 {
            font-size: 32px !important;
            margin-bottom: 12px !important;
          }
          
          #contact > div > div:first-child p {
            font-size: 16px !important;
            padding: 0 10px !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          
          .contact-card {
            padding: 20px !important;
            gap: 12px !important;
          }
          
          .contact-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 20px !important;
          }
          
          .contact-label {
            font-size: 11px !important;
          }
          
          .contact-value {
            font-size: 14px !important;
          }
          
          .contact-footer {
            margin-top: 35px !important;
            padding: 20px !important;
          }
          
          .contact-footer p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;