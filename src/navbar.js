import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { theme } from "./theme";

function NavIcon({ id, active = false }) {
  const color = active ? theme.colors.text : theme.colors.accent;
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (id === "about") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.2" stroke={color} strokeWidth="1.8" />
        <path d="M6.5 18.2C7.8 15.8 9.7 14.8 12 14.8C14.3 14.8 16.2 15.8 17.5 18.2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "job") {
    return (
      <svg {...props}>
        <rect x="4" y="7" width="16" height="11" rx="2.4" stroke={color} strokeWidth="1.8" />
        <path d="M9 7V5.8C9 4.81 9.81 4 10.8 4H13.2C14.19 4 15 4.81 15 5.8V7" stroke={color} strokeWidth="1.8" />
        <path d="M4 11.2H20" stroke={color} strokeWidth="1.8" />
      </svg>
    );
  }

  if (id === "education") {
    return (
      <svg {...props}>
        <path d="M3.5 9L12 5L20.5 9L12 13L3.5 9Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 11.1V14.3C7 15.9 9.2 17.2 12 17.2C14.8 17.2 17 15.9 17 14.3V11.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "projects") {
    return (
      <svg {...props}>
        <rect x="4.5" y="5" width="15" height="14" rx="2.4" stroke={color} strokeWidth="1.8" />
        <path d="M8 9H16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 13H13.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M7.5 9.5L12 5L16.5 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12.2V17C6 18.1 6.9 19 8 19H16C17.1 19 18 18.1 18 17V12.2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "job", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: scrolled ? "18px" : "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          width: scrolled ? "94%" : "90%",
          maxWidth: "1060px",
        }}
      >
        <div
          style={{
            background: scrolled ? theme.colors.panelStrong : theme.colors.panel,
            backdropFilter: "blur(22px)",
            borderRadius: theme.radii.pill,
            padding: "14px 18px",
            boxShadow: scrolled ? theme.shadows.glow : theme.shadows.soft,
            border: `1px solid ${theme.colors.line}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "10px",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  duration={500}
                  spy
                  offset={0}
                  onSetActive={() => setActiveSection(item.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 18px",
                    borderRadius: theme.radii.pill,
                    fontSize: "15px",
                    fontWeight: "600",
                    fontFamily: theme.fonts.sans,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                    background:
                      activeSection === item.id ? theme.gradients.accentSoft : "transparent",
                    color:
                      activeSection === item.id ? theme.colors.text : theme.colors.muted,
                    border:
                      activeSection === item.id
                        ? `1px solid ${theme.colors.lineStrong}`
                        : "1px solid transparent",
                    boxShadow:
                      activeSection === item.id ? "inset 0 0 0 1px rgba(31, 170, 135, 0.08)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = "rgba(79, 114, 229, 0.08)";
                      e.currentTarget.style.color = theme.colors.text;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = theme.colors.muted;
                    }
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NavIcon id={item.id} active={activeSection === item.id} />
                  </span>
                  <span style={{ display: scrolled ? "none" : "inline" }}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`${process.env.PUBLIC_URL}/HsuWaiHninKyawResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-button theme-button-primary"
            style={{
              padding: "12px 20px",
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            Resume
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          nav {
            top: 10px !important;
            width: 95% !important;
          }

          nav > div {
            flex-wrap: wrap !important;
            padding: 12px !important;
            gap: 10px !important;
            border-radius: 26px !important;
          }

          nav ul {
            order: 3;
            width: 100%;
            justify-content: space-between !important;
            gap: 4px !important;
          }

          nav ul li a {
            padding: 10px 12px !important;
            font-size: 12px !important;
          }

          nav ul li a span:last-child {
            display: none !important;
          }

          nav ul li a svg {
            width: 20px !important;
            height: 20px !important;
          }

          nav > div > a:first-child {
            order: 2;
          }

          nav > div > a:last-child {
            padding: 10px 14px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
