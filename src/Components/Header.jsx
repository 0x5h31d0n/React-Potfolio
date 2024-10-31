import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, FileText, Mail } from 'lucide-react';
import '../Header.css'; // Make sure to import the CSS file

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon (Unicode character) */}
      </div>
      <nav className={isOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <Home size={16} color='orange'/> About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              <Briefcase size={16} color='orange'/> Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={toggleMenu}>
              <FileText size={16} color='orange'/> Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <Mail size={16} color='orange'/> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;