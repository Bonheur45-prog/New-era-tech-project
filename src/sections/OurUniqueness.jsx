import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import './OurUniqueness.css';

/**
 * Uniqueness Section Component
 * Showcases company's unique value propositions with video
 * Optimized for SEO and performance
 */
export function UniquenessSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer for lazy loading video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Load video only when section is in view
            if (videoRef.current && !isVideoLoaded) {
              videoRef.current.load();
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '50px' // Start loading slightly before it enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVideoLoaded]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Unique value propositions
  const uniquePoints = [
    {
      icon: "BO",
      title: "Rwanda-Rooted Expertise",
      description: "We understand the local market, regulations, and business culture—giving you solutions that actually work in Rwanda's ecosystem."
    },
    {
      icon: "NH",
      title: "Lean & Agile Team",
      description: "No corporate bloat. Two founders who code, strategize, and scale rapidly when projects demand it. You get senior-level attention, not junior delegation."
    },
    {
      icon: "EU",
      title: "Full-Stack Capability",
      description: "From system architecture to databases, backend to modern frameworks—we handle the entire technology stack without outsourcing critical components."
    },
    {
      icon: "RD",
      title: "Business-First Approach",
      description: "Technology serves your business goals, not the other way around. Every solution is measured by ROI, scalability, and long-term value."
    }
  ];

  return (
    <section 
      id="uniqueness" 
      className="uniqueness-section" 
      ref={sectionRef}
      aria-labelledby="uniqueness-title"
    >
      <div className="container">
        <div className="uniqueness-grid">
          {/* Left Side - Content */}
          <div className="uniqueness-content">
            <div className="section-label">
              <span className="label-icon">✦</span>
              <span className="label-text">What Sets Us Apart</span>
            </div>
            
            <h2 id="uniqueness-title" className="section-title">
              Why Rwanda's Growing Businesses Choose Us
            </h2>
            
            <p className="section-intro">
              We're not just developers—we're technical partners who understand 
              the intersection of code, business, and the Rwandan market. Here's 
              what makes working with us different.
            </p>

            {/* Unique Points Grid */}
            <div className="points-grid">
              {uniquePoints.map((point, index) => (
                <article 
                  key={index} 
                  className="point-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="point-icon">{point.icon}</div>
                  <div className="point-content">
                    <h3 className="point-title">{point.title}</h3>
                    <p className="point-description">{point.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to Action */}
            <div className="cta-wrapper">
              <Link to="/contact" className="cta-button">
                <span>Start Your Project</span>
                <svg 
                  className="cta-arrow" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <p className="cta-note">Free consultation • No commitment required</p>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="video-wrapper">
            <div className="video-container">
              {/* Video element with lazy loading and optimization */}
              <video
                ref={videoRef}
                className={`feature-video ${isVideoLoaded ? 'loaded' : ''}`}
                autoPlay
                loop
                muted
                playsInline
                preload="none" // Don't preload until in view
                poster="/images/video-poster.jpg" // Add a poster image
                onLoadedData={handleVideoLoaded}
                aria-label="Company showcase video"
              >
                {/* Multiple sources for browser compatibility */}
                {isInView && (
                  <>
                    <source 
                      src="/videos/showcase.webm" 
                      type="video/webm" 
                    />
                    <source 
                      src="/videos/uniqueness.mp4" 
                      type="/video/mp4" 
                    />
                  </>
                )}
                {/* Fallback for browsers that don't support video */}
                <img 
                  src="/images/video-fallback.jpg" 
                  alt="Company showcase" 
                />
              </video>

              {/* Loading skeleton */}
              {!isVideoLoaded && (
                <div className="video-skeleton">
                  <div className="skeleton-pulse"></div>
                </div>
              )}

              {/* Decorative elements */}
              <div className="video-decoration decoration-1"></div>
              <div className="video-decoration decoration-2"></div>
            </div>

            {/* Stats Overlay */}
            <div className="stats-overlay">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Local Team</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">2-10</span>
                <span className="stat-label">Days to Start</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Scalability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

