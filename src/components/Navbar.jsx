/*import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    console.log(id);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
        <div className='navbar-container'>
            <h2 className="logo">Bonh&SAm</h2>

            <ul className="nav-links">
                <li onClick={() => scrollToSection("hero")}>Home</li>
                <li><Link to="/About">About</Link></li>
                <li onClick={() => scrollToSection("services")}>Services</li>
                <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  );
}*/

/*import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false); // close menu on click

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo" onClick={() => scrollToSection("hero")}>
          Bonh&SAm
        </h2>

        {/* Hamburger /}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Links /}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li><Link to="/About">About</Link></li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}*/

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Close menu when clicking a link
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false); // Close menu when navigating to contact
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <h2 className="logo">Bonh&SAm</h2>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={handleContactClick}><Link to="/About">About</Link></li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
          <li onClick={handleContactClick}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="menu-overlay" 
            onClick={toggleMenu}
            aria-label="Close menu"
          />
        )}
      </div>
    </nav>
  );
}

