import './Footer.css';

export function Footer({ setCurrentPage }) {
  const scrollToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="footer-container">
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                <a onClick={() => setCurrentPage('home')}>Home</a>
                <a onClick={() => setCurrentPage('about')}>About</a>
                <a onClick={() => setCurrentPage('services')}>Services</a>
                <a onClick={() => setCurrentPage('products')}>Products</a>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
                <p>&copy; 2025 Bonh@SAm. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
}