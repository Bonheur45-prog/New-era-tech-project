import {SpeedIcon} from '../assets/icons/Speed';
import './ChooseUs.css';

export function ChooseUs() {
  const reasons = [
    { icon: <SpeedIcon />, title: "Quality", description: "We deliver top-notch quality in every project" },
    { icon: "SA", title: "Speed", description: "Fast turnaround without compromising standards" },
    { icon: "MU", title: "Innovations", description: "Cutting-edge solutions for modern challenges" },
    { icon: "EL", title: "Support", description: "Dedicated support team always ready to help" }
  ];

  return (
    <section id="why-choose">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}