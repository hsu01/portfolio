import React, { useState } from "react";
import { theme } from "./theme";

function BrandIcon({ id, size = 24 }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (id === "linkedin") {
    return (
      <svg {...commonProps}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#0A66C2" />
        <rect x="6.2" y="9.4" width="2.3" height="8.2" fill="#fff" />
        <circle cx="7.35" cy="6.95" r="1.35" fill="#fff" />
        <path
          d="M11 9.4h2.2v1.12h.03c.3-.58 1.07-1.4 2.65-1.4 2.83 0 3.35 1.76 3.35 4.6v3.88H17v-3.44c0-.82-.02-1.88-1.22-1.88-1.22 0-1.4.9-1.4 1.82v3.5H11V9.4z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (id === "email") {
    return (
      <svg {...commonProps}>
        <rect x="2.5" y="4.2" width="19" height="15.6" rx="3" fill="#fff" stroke="#DADCE0" />
        <path d="M4.5 7.2L12 12.9L19.5 7.2" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
        <path d="M4.8 18.8V8.1L9.8 11.9" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19.2 18.8V8.1L14.2 11.9" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4.5 7.2H19.5" stroke="#FBBC05" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  if (id === "github") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 2.5C6.76 2.5 2.5 6.76 2.5 12c0 4.2 2.72 7.76 6.49 9.02.48.09.66-.21.66-.47 0-.23-.01-1-.01-1.82-2.64.57-3.2-1.12-3.2-1.12-.43-1.1-1.05-1.39-1.05-1.39-.86-.58.06-.57.06-.57.95.07 1.45.97 1.45.97.84 1.45 2.21 1.03 2.75.79.09-.61.33-1.03.59-1.27-2.11-.24-4.33-1.05-4.33-4.69 0-1.04.37-1.89.97-2.56-.1-.24-.42-1.22.09-2.54 0 0 .79-.25 2.6.98A8.96 8.96 0 0112 7.64c.8 0 1.62.11 2.38.33 1.81-1.23 2.6-.98 2.6-.98.52 1.32.2 2.3.1 2.54.6.67.97 1.52.97 2.56 0 3.65-2.22 4.45-4.34 4.69.34.3.64.88.64 1.78 0 1.29-.01 2.33-.01 2.64 0 .26.17.57.67.47A9.51 9.51 0 0021.5 12c0-5.24-4.26-9.5-9.5-9.5z"
          fill="#111827"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <defs>
        <linearGradient id="igGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F58529" />
          <stop offset="0.4" stopColor="#DD2A7B" />
          <stop offset="0.72" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5.5" fill="url(#igGradient)" />
      <rect x="7.2" y="7.2" width="9.6" height="9.6" rx="3.2" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.45" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.95" r="1.05" fill="#fff" />
    </svg>
  );
}

function Contact() {
  const [activeLink, setActiveLink] = useState("linkedin");

  const contactLinks = [
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Best for opportunities and quick replies",
      handle: "Hsu Wai Hnin Kyaw",
      url: "https://www.linkedin.com/in/hsuwaihninkyaw/",
      color: "#2563eb",
      stat: "Fastest reply",
    },
    {
      id: "email",
      label: "Email",
      value: "For internships, projects, and longer messages",
      handle: "hsu01@uw.edu",
      url: "mailto:hsu01@uw.edu",
      color: "#1faa87",
      stat: "Open to collabs",
    },
    {
      id: "github",
      label: "GitHub",
      value: "See code, experiments, and shipped work",
      handle: "@hsu01",
      url: "https://github.com/hsu01",
      color: "#182848",
      stat: "Code archive",
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "A more casual side of what I’m up to",
      handle: "@hsu_whk",
      url: "https://www.instagram.com/hsu_whk/",
      color: "#e4405f",
      stat: "Social",
    },
  ];

  const activeCard = contactLinks.find((link) => link.id === activeLink) || contactLinks[0];

  return (
    <section
      id="contact"
      className="section-shell"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 20px",
        background: theme.gradients.hero,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-100px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(79, 114, 229, 0.14)",
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-60px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(31, 170, 135, 0.16)",
          filter: "blur(90px)",
        }}
      />

      <div
        style={{
          width: "min(1120px, 100%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Reach out
          </p>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 4.4rem)",
              color: theme.colors.text,
              fontFamily: theme.fonts.sans,
              fontWeight: "700",
              margin: "0 0 14px",
              letterSpacing: "-0.04em",
            }}
          >
            Let&apos;s Connect
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
          className="contact-layout"
        >
          <div
            className="glass-panel feature-panel"
            style={{
              borderRadius: theme.radii.xl,
              padding: "34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "100%",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(240,246,255,0.88) 52%, rgba(238,248,245,0.92) 100%)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 14px",
                      borderRadius: theme.radii.pill,
                      background: `${activeCard.color}12`,
                      color: activeCard.color,
                      border: `1px solid ${activeCard.color}22`,
                      fontFamily: theme.fonts.mono,
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {activeCard.stat}
                  </div>
                  <h2
                    style={{
                      margin: "18px 0 10px",
                      color: theme.colors.text,
                      fontSize: "36px",
                      lineHeight: "1.05",
                      fontFamily: theme.fonts.sans,
                    }}
                  >
                    {activeCard.label}
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      color: theme.colors.subtle,
                      fontSize: "18px",
                      lineHeight: "1.7",
                    }}
                  >
                    {activeCard.value}
                  </p>
                </div>

                <div
                  style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "22px",
                    background: `${activeCard.color}14`,
                    color: activeCard.color,
                    border: `1px solid ${activeCard.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 16px 36px ${activeCard.color}18`,
                    flexShrink: 0,
                  }}
                >
                  <BrandIcon id={activeCard.id} size={34} />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                  marginBottom: "28px",
                }}
                className="contact-stats"
              >
                {[
                  { label: "Response vibe", value: "Friendly + direct" },
                  { label: "Current mode", value: "Open to work" },
                  { label: "Location", value: "Seattle, WA" },
                  { label: "Best timing", value: "Weekdays" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "16px 18px",
                      borderRadius: theme.radii.md,
                      background: "rgba(255,255,255,0.6)",
                      border: `1px solid ${theme.colors.line}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        color: theme.colors.muted,
                        fontFamily: theme.fonts.mono,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "6px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: theme.colors.text,
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <a
                href={activeCard.url}
                target={activeCard.url.startsWith("http") ? "_blank" : undefined}
                rel={activeCard.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="theme-button theme-button-primary"
              >
                Open {activeCard.label}
              </a>
              <div
                style={{
                  color: theme.colors.subtle,
                  fontSize: "15px",
                  fontWeight: "600",
                  wordBreak: "break-word",
                }}
              >
                {activeCard.handle}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
            className="contact-grid"
          >
            {contactLinks.map((link, index) => {
              const isActive = activeLink === link.id;

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setActiveLink(link.id)}
                  onFocus={() => setActiveLink(link.id)}
                  style={{
                    textDecoration: "none",
                    borderRadius: theme.radii.lg,
                    padding: "22px",
                    background: isActive ? "rgba(255,255,255,0.96)" : theme.colors.panel,
                    border: `1px solid ${isActive ? link.color : theme.colors.line}`,
                    boxShadow: isActive ? `0 20px 45px ${link.color}1f` : theme.shadows.soft,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                    display: "grid",
                    gridTemplateColumns: "56px 1fr auto",
                    gap: "16px",
                    alignItems: "center",
                    animation: `fadeInUp 0.6s ease ${index * 0.08}s both`,
                  }}
                  className="contact-card"
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "18px",
                      background: `${link.color}14`,
                      color: link.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${link.color}18`,
                    }}
                  >
                    <BrandIcon id={link.id} size={26} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          color: theme.colors.text,
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: theme.radii.pill,
                          background: `${link.color}12`,
                          color: link.color,
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {link.stat}
                      </span>
                    </div>
                    <div
                      style={{
                        color: theme.colors.muted,
                        fontSize: "14px",
                        lineHeight: "1.55",
                        marginBottom: "6px",
                      }}
                    >
                      {link.value}
                    </div>
                    <div
                      style={{
                        color: link.color,
                        fontFamily: theme.fonts.mono,
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      {link.handle}
                    </div>
                  </div>

                  <div
                    style={{
                      color: link.color,
                      fontSize: "22px",
                      transform: isActive ? "translateX(6px)" : "translateX(0)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    →
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-card:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          #contact {
            padding: 72px 16px !important;
            min-height: auto !important;
          }

          #contact h1 {
            font-size: 42px !important;
          }

          .feature-panel {
            padding: 24px !important;
          }

          .feature-panel h2 {
            font-size: 28px !important;
          }

          .feature-panel p {
            font-size: 16px !important;
          }

          .contact-stats {
            grid-template-columns: 1fr !important;
          }

          .contact-card {
            grid-template-columns: 50px 1fr auto !important;
            padding: 18px !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 560px) {
          .feature-panel > div:last-child {
            align-items: stretch !important;
          }

          .feature-panel > div:last-child a {
            width: 100% !important;
            justify-content: center !important;
          }

          .contact-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
