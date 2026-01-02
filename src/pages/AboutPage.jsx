import { Footer } from '../components/Footer';

import "./AboutPage.css";

/**
 * AboutPage Component
 * Professional About Us page for Web & Software Development company
 * Location: Rwanda
 */
export function AboutPage() {
  const founders = [
    {
      name: "Bonheur Nshimiyimana",
      role: "Co-Founder & Technical Lead",
      bio: "Specialized in systems architecture, networking, and backend development. Proficient in databases and programming across C, C++, Java, JavaScript, and modern frameworks.",
      expertise: ["Systems Architecture", "Backend Development", "Database Design", "Network Engineering"],
      image: "/images/bonheur.png" // Replace with actual image path
    },
    {
      name: "Samuel Niyonsenga",
      role: "Co-Founder & Strategy",
      bio: "Focused on bridging technology with business objectives. Expert in aligning technical solutions with economic and strategic goals.",
      expertise: ["Business Strategy", "Tech Consulting", "Economic Analysis", "Project Management"],
      image: "/images/samuel.jpg" // Replace with actual image path
    }
  ];

  return (
    <>
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="hero-title">Building Digital Solutions for Rwanda</h1>
            <p className="hero-subtitle">
              Expert software development and IT consultation, locally rooted and globally minded.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="who-we-are">
          <div className="container">
            <h2 className="section-title">Who We Are</h2>
            <div className="content-grid">
              <div className="content-block">
                <p className="lead-text">
                  We are a Rwanda-based software development and IT consultation firm delivering
                  tailored solutions for businesses ready to scale through technology.
                </p>
                <p>
                  Founded by two computer science professionals with deep expertise in systems,
                  development, and strategy, we combine technical excellence with business insight
                  to solve real problems.
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3 className="stat-number">2</h3>
                  <p className="stat-label">Co-Founders</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">Local</h3>
                  <p className="stat-label">Rwanda-Based</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">Scalable</h3>
                  <p className="stat-label">Team Model</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="founders-section">
          <div className="container">
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-description">
              Both studied Computer Science, Mathematics, and Economics—bringing a unique
              blend of technical depth and strategic thinking.
            </p>
            <div className="founders-grid">
              {founders.map((founder, index) => (
                <article key={index} className="founder-card">
                  <div className="founder-image-wrapper">
                    <img
                      src={`src/${founder.image}`}
                      alt={`${founder.name} - ${founder.role}`}
                      className="founder-image"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="founder-initials" style={{ display: 'none' }}>
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="founder-content">
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                    <p className="founder-bio">{founder.bio}</p>
                    <div className="expertise-tags">
                      {founder.expertise.map((skill, idx) => (
                        <span key={idx} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="how-we-work">
          <div className="container">
            <h2 className="section-title">How We Work</h2>
            <div className="work-process">
              <div className="process-card">
                <div className="process-number">01</div>
                <h3 className="process-title">Understand</h3>
                <p className="process-description">
                  We start by listening. Your business goals, challenges, and technical
                  requirements shape our approach.
                </p>
              </div>
              <div className="process-card">
                <div className="process-number">02</div>
                <h3 className="process-title">Design</h3>
                <p className="process-description">
                  Strategic planning meets technical architecture. We design solutions
                  that are scalable, secure, and maintainable.
                </p>
              </div>
              <div className="process-card">
                <div className="process-number">03</div>
                <h3 className="process-title">Build</h3>
                <p className="process-description">
                  Clean code, modern frameworks, and industry best practices. We build
                  with precision and scale in mind.
                </p>
              </div>
              <div className="process-card">
                <div className="process-number">04</div>
                <h3 className="process-title">Scale</h3>
                <p className="process-description">
                  As projects grow, so does our team. We bring in specialized talent
                  to match your evolving needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="container">
            <div className="vision-card">
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-statement">
                To be Rwanda's trusted partner for digital transformation—where technical
                expertise meets business strategy, and local talent drives global-standard solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

