import { Link, useLocation, useNavigate } from "react-router-dom";
import './Footer.css';

export function Footer({ setCurrentPage }) {
  const navigate = useNavigate();
  /*const scrollToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };*/

  const scrollToSection = (id) => {
    
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
    <div className="footer-container">
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                <a onClick={() => scrollToSection('home')}>Home</a>
                <Link to='/about'>About</Link>
                <a onClick={() => scrollToSection('services')}>Services</a>
                <a onClick={() => setCurrentPage('products')}>Products</a>
                <Link to='/contact'>Contact</Link>
                </div>
                <p>&copy; 2025 Bonh@SAm. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
}