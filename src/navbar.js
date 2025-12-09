import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'job', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'contact', label: 'Contact', icon: '📬' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? '20px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          width: scrolled ? '95%' : '90%',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            background: scrolled 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            borderRadius: '50px',
            padding: '15px 30px',
            boxShadow: scrolled 
              ? '0 10px 40px rgba(169, 113, 85, 0.2)' 
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Logo/Name */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
            style={{
              fontSize: '20px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            HSU
          </Link>

          {/* Navigation Items */}
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '8px',
              margin: 0,
              padding: 0,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                  onSetActive={() => setActiveSection(item.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    background: activeSection === item.id 
                      ? 'linear-gradient(135deg, #A97155 0%, #BC7C7C 100%)' 
                      : 'transparent',
                    color: activeSection === item.id ? '#FFF' : '#8C5C3C',
                    boxShadow: activeSection === item.id 
                      ? '0 4px 15px rgba(169, 113, 85, 0.3)' 
                      : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'rgba(169, 113, 85, 0.1)';
                      e.currentTarget.style.color = '#A97155';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#8C5C3C';
                    }
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <span style={{ display: scrolled ? 'none' : 'inline' }}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://drive.google.com/file/d/1emIAUOByrHC3PFmNRR-PXHfF62N_7V6t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #A97155 0%, #8C5C3C 100%)',
              color: '#FFF',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(169, 113, 85, 0.3)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(169, 113, 85, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(169, 113, 85, 0.3)';
            }}
          >
            <span>📄</span> Resume
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            top: 10px !important;
            width: 95% !important;
          }
          
          nav > div {
            flex-wrap: wrap !important;
            padding: 10px 15px !important;
            gap: 6px !important;
          }
          
          nav ul {
            order: 3;
            width: 100%;
            justify-content: space-between !important;
            gap: 2px !important;
          }
          
          nav ul li a {
            padding: 6px 8px !important;
            font-size: 11px !important;
          }

          nav ul li a span:first-child {
            font-size: 14px !important;
          }
          
          nav ul li a span:last-child {
            display: none !important;
          }
          
          nav > div > a:first-child {
            order: 1;
            font-size: 16px !important;
          }
          
          nav > div > a:last-child {
            order: 2;
            padding: 6px 12px !important;
            font-size: 121x !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;