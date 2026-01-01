import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";  
import "./portfolio.css";

export function PortfolioSection() {
  const portfolioItems = [
    { "title": "Project Alpha", "category": "Web Design", "background": `url(${portfolio1})`},
    { "title": "Project Beta", "category": "Mobile App", "background": `url(${portfolio2})`},
    { "title": "Project Gamma", "category": "Branding", "background": `url(${portfolio3})`},
    { "title": "Project Delta", "category": "Marketing", "background": `url(${portfolio4})`},
    { "title": "Project Epsilon", "category": "Development", "background": `url(${portfolio5})`}
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Our Portfolio</h2>

      <div className="portfolio-ticker">
        <div className="portfolio-track">
          {/* duplicate items for infinite loop */}
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div
              key={index}
              className="portfolio-item"
              style={{
                background: `${item.background} center/cover no-repeat`
              }}
            >
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}