import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="job" smooth={true}>
            Job Experiences
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
