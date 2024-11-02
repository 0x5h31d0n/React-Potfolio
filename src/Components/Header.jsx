import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, FileText, Mail } from 'lucide-react';
import '../Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${visible ? 'header-visible' : 'header-hidden'}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
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