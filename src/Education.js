import React from "react";

function Education() {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of Washington, Paul G. Allen School of Computer Science & Engineering",
      date: "September 2024 - June 2027",
      icon: "🎓",
      color: "#A97155",
    },
    {
      title: "Microsoft Endowed Scholarship",
      institution: "Microsoft - Awarded $2,000 to outstanding students pursuing degrees in Computer Science at Paul G Allen School of Comptuer Science and Engineering",
      date: "2025",
      icon: "🏆",
      color: "#BC7C7C",
      isAward: true,
    },
    {
      title: "2024 All Washington Academic Team  Scholarship",
      institution: "Phi Theta Kappa Honor Society - Awarded $9,000 to top 16 college students in Washington State",
      date: "2024",
      icon: "🏆",
      color: "#BC7C7C",
      isAward: true,
    },
    {
      title: "Associate's Degree in Computer Science",
      institution: "Spokane Falls Community College",
      date: "April 2022 - June 2024",
      icon: "📚",
      color: "#A97155",
    },
    {
      title: "Level 4 Diploma in Business IT",
      institution: "NCC Education, United Kingdom",
      date: "August 2018 - December 2020",
      icon: "💼",
      color: "#8C5C3C",
    },
    {
      title: "High School Diploma in General Studies",
      institution: "Practicing High School Yangon University of Education, Myanmar",
      date: "June 2007 - March 2018",
      icon: "🏫",
      color: "#A97155",
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "80px 20px 60px",
        background: "linear-gradient(180deg, #FAF3E0 0%, #F0DBC5 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(169, 113, 85, 0.05)",
          filter: "blur(100px)",
        }}
      />

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "80px", position: "relative", zIndex: 1 }}>
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
          Education Journey
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#8C5C3C",
            margin: "0 auto",
            fontFamily: "'Martel', serif",
          }}
        >
          The path that shaped my passion for technology and problem-solving
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "30px",
            top: "0",
            bottom: "0",
            width: "3px",
            background: "linear-gradient(180deg, #A97155 0%, #BC7C7C 100%)",
            opacity: "0.3",
          }}
          className="timeline-line"
        />

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              paddingLeft: "80px",
              marginBottom: "50px",
              animation: `fadeInLeft 0.6s ease ${index * 0.15}s both`,
            }}
            className="timeline-item"
          >
            {/* Timeline Dot with Icon */}
            <div
              style={{
                position: "absolute",
                left: "14px",
                top: "8px",
                width: "35px",
                height: "35px",
                background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}CC 100%)`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                boxShadow: `0 4px 15px ${item.color}40`,
                zIndex: 2,
              }}
              className="timeline-dot"
            >
              {item.icon}
            </div>

            {/* Content Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px 30px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              className="timeline-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(10px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(169, 113, 85, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
              }}
            >
              {/* Award Badge */}
              {item.isAward && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "20px",
                    background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                    color: "#FFF",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                    boxShadow: "0 4px 15px rgba(255, 215, 0, 0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                  className="award-badge"
                >
                  ⭐ Award
                </div>
              )}

              {/* Date Badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: `${item.color}15`,
                  borderRadius: "15px",
                  fontSize: "12px",
                  color: item.color,
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                📅 {item.date}
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "22px",
                  color: "#6C5B5B",
                  marginBottom: "10px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
                className="timeline-title"
              >
                {item.title}
              </h2>

              {/* Institution */}
              <p
                style={{
                  fontSize: "16px",
                  color: "#8A7A7A",
                  lineHeight: "1.6",
                  fontFamily: "'Martel', serif",
                  margin: 0,
                }}
                className="timeline-institution"
              >
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          #education {
            padding: 60px 15px 40px !important;
          }
          
          #education h1 {
            font-size: 32px !important;
            margin-bottom: 10px !important;
          }
          
          #education > div:first-of-type {
            margin-bottom: 50px !important;
          }
          
          #education > div:first-of-type p {
            font-size: 16px !important;
          }
          
          .timeline-line {
            left: 18px !important;
          }
          
          .timeline-item {
            padding-left: 50px !important;
            margin-bottom: 35px !important;
          }
          
          .timeline-dot {
            left: 8px !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 14px !important;
          }
          
          .timeline-card {
            padding: 18px 20px !important;
          }
          
          .award-badge {
            font-size: 10px !important;
            padding: 4px 10px !important;
            top: -10px !important;
            right: 10px !important;
          }
          
          .timeline-title {
            font-size: 18px !important;
          }
          
          .timeline-institution {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;