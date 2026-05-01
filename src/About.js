import React from "react";
import ProfileImage from "./Profile.jpg";
import { theme } from "./theme";

function About() {
  return (
    <section
      id="about"
      className="section-shell"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.gradients.hero,
        position: "relative",
        overflow: "hidden",
        padding: "180px 20px 56px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(108, 143, 255, 0.16)",
          filter: "blur(70px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(53, 199, 164, 0.16)",
          filter: "blur(90px)",
        }}
      />

      <div
        style={{
          maxWidth: "920px",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "340px",
              borderRadius: "140px 140px 36px 36px",
              padding: "7px",
              background: "rgba(255, 255, 255, 0.96)",
              boxShadow: "0 24px 60px rgba(23, 40, 58, 0.16)",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) rotate(-1deg)";
              e.currentTarget.style.boxShadow = "0 34px 75px rgba(31, 95, 114, 0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
              e.currentTarget.style.boxShadow = "0 24px 60px rgba(23, 40, 58, 0.16)";
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "7px",
                borderRadius: "132px 132px 30px 30px",
                overflow: "hidden",
                background: "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 100%)",
              }}
            >
              <img
                src={ProfileImage}
                alt="Hsu Wai Hnin Kyaw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.045)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-14px",
              right: "-14px",
              bottom: "-12px",
              borderRadius: "150px 150px 44px 44px",
              border: `2px solid rgba(255, 255, 255, 0.85)`,
              animation: "pulseFrame 2.6s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "auto -24px -18px auto",
              width: "110px",
              height: "110px",
              borderRadius: "32px",
              background: theme.gradients.accentSoft,
              filter: "blur(16px)",
              opacity: 0.7,
              zIndex: -1,
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(3.25rem, 9vw, 4.8rem)",
            fontFamily: theme.fonts.sans,
            fontWeight: "700",
            background: theme.gradients.accent,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "14px",
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
          }}
        >
          Hsu Wai Hnin Kyaw
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            fontSize: "19px",
            color: theme.colors.subtle,
            fontWeight: "500",
            marginBottom: "28px",
            fontFamily: theme.fonts.sans,
          }}
        >
          <span>CS Student @ UW Seattle</span>
          <span style={{ color: theme.colors.accentAlt }}>•</span>
          <span>Full Stack Developer</span>
        </div>

        <div
          className="glass-panel"
          style={{
            borderRadius: theme.radii.xl,
            padding: "38px",
            marginBottom: "34px",
            background: "rgba(255, 255, 255, 0.84)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.85",
              color: theme.colors.subtle,
              fontFamily: theme.fonts.sans,
              margin: 0,
            }}
          >
            Hey! I&apos;m Hsu, a Computer Science senior at the University of Washington, originally
            from Myanmar 🇲🇲. I transferred from community college while working full time and
            taking up to 20 credits, which really shaped how I handle pressure and adapt quickly.
            I&apos;m someone who likes to keep improving, whether that&apos;s learning new tools,
            refining my projects, or randomly fixing my resume at 3AM ✨. I type around 130 WPM
            and enjoy staying productive 💻. Outside of school, I&apos;ve been traveling around the
            U.S. ✈️, exploring new places, making matcha 🍵, and spending time with friends while
            figuring out what I want to build next.
          </p>
        </div>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="theme-button theme-button-primary">
            View My Work
          </a>
          <a href="#contact" className="theme-button theme-button-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulseFrame {
          0% {
            transform: scale(1);
            opacity: 0.82;
          }
          70% {
            transform: scale(1.03);
            opacity: 0.38;
          }
          100% {
            transform: scale(1);
            opacity: 0.82;
          }
        }

        @media (max-width: 768px) {
          #about {
            padding: 150px 16px 44px !important;
          }

          #about h1 {
            font-size: 52px !important;
          }

          #about > div:last-of-type > div:nth-of-type(3) {
            font-size: 17px !important;
            margin-bottom: 22px !important;
          }

          #about .glass-panel {
            padding: 24px !important;
          }

          #about .glass-panel p {
            font-size: 16px !important;
            line-height: 1.75 !important;
          }

          #about > div:last-of-type > div:first-of-type > div:first-child {
            width: 220px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
