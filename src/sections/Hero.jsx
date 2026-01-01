import React, { useState, useEffect } from "react";
import image1 from '../assets/hero-1.jpg';
import image2 from '../assets/hero-2.png';
import image3 from '../assets/hero-3.jpg';
import './Hero.css';

// Hero Section with Image Slider
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slides data - these gradients simulate images/gifs
  const slides = [
    {
      "title": "Welcome to Our Business",
      "description": "Delivering Excellence in Every Service",
      "background": `url(${image1})`
    },
    {
      "title": "Innovation & Quality",
      "description": "Your Success is Our Priority",
      "background": `url(${image2})`
    },
    {
      title: "Trusted by Thousands",
      description: "Join Our Growing Community",
      "background": `url(${image3})`
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div 
            className="hero-background" 
            style={{ backgroundImage: slide.background }}
          />
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button className="hero-btn">Get Started</button>
          </div>
        </div>
      ))}
      
      {/* Slider dots for navigation */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}