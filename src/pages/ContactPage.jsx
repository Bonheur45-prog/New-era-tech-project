import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import './ContactPage.css';

/**
 * ContactPage Component
 * Contact page with form and company information
 * Location: Rwanda
 */
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  // Service options
  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'IT Consultation',
    'System Architecture',
    'Database Design',
    'Cloud Solutions',
    'Other'
  ];

  // Contact information
  const contactInfo = {
    email: 'bonheurnshimiyimana@gmail.com',
    phone: '+250 795 263 269',
    address: 'Kigali, Rwanda',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM EAT'
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // API call to backend (replace with actual endpoint)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);

    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or contact us directly.'
      });
      console.error('Contact form error:', error);
    }
  };

  return (
    <>
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">
              Ready to start your project? Let's discuss how we can help your business grow.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  {/* Phone Field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 XXX XXX XXX"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  {/* Company Field (Optional) */}
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service Interested In <span className="required">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={`form-select ${errors.service ? 'error' : ''}`}
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="error-message">{errors.service}</span>}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="6"
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success Message */}
                  {formStatus.submitted && (
                    <div className="success-message">
                      <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Message sent successfully! We'll be in touch soon.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {formStatus.error && (
                    <div className="error-alert">
                      <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p>{formStatus.error}</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information Sidebar */}
              <div className="contact-info-sidebar">
                <div className="info-card">
                  <h3 className="info-title">Contact Information</h3>
                  <p className="info-description">
                    Reach out to us directly through any of these channels.
                  </p>

                  <div className="info-items">
                    {/* Email */}
                    <div className="info-item">
                      <div className="info-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="info-content">
                        <p className="info-label">Email</p>
                        <a href={`mailto:${contactInfo.email}`} className="info-value">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="info-item">
                      <div className="info-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="info-content">
                        <p className="info-label">Phone</p>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="info-value">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="info-item">
                      <div className="info-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="info-content">
                        <p className="info-label">Location</p>
                        <p className="info-value">{contactInfo.address}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="info-item">
                      <div className="info-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="info-content">
                        <p className="info-label">Business Hours</p>
                        <p className="info-value">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links Card */}
                <div className="quick-links-card">
                  <h4 className="quick-links-title">Quick Response</h4>
                  <p className="quick-links-text">
                    For urgent inquiries, call us directly. We typically respond to emails within 24 hours.
                  </p>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="quick-call-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
