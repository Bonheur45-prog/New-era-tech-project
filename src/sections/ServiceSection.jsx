import './ServiceSection.css';

export function ServicesSection() {
  const services = [
    {
      title: "Consulting",
      description: "Expert guidance to help your business grow and overcome challenges with strategic planning."
    },
    {
      title: "Development",
      description: "Custom software solutions tailored to your specific business needs and requirements."
    },
    {
      title: "Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach."
    },
    {
      title: "Support",
      description: "24/7 customer support to ensure your operations run smoothly without interruption."
    },
    {
      title: "Analytics",
      description: "Data-driven insights to help you make informed business decisions and optimize performance."
    },
    {
      title: "Training",
      description: "Professional training programs to upskill your team and maximize productivity."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}