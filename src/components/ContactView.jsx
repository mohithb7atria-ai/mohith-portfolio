import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Mohith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <>
      {/* ================= CONTACT HERO ================= */}
      <section className="contact-hero">
        <div className="contact-bg-text">CONNECT</div>

        <div className="contact-hero-content">
          <p className="section-small">GET IN TOUCH</p>
          <h1>
            Have an Idea? <span>Let's Talk.</span>
          </h1>
          <p>
            Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">
        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <p className="section-small">LET'S CONNECT</p>
          <h2>
            Let's Build Something <span>Great Together.</span>
          </h2>

          <p className="contact-description">
            Whether you have a project, an idea, or an opportunity, feel free to reach out. I'm always open to discussing new ideas, AI-assisted development, and technical collaborations.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">✉</div>
              <div>
                <span>Email</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">◉</div>
              <div>
                <span>Location</span>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✦</div>
              <div>
                <span>Availability</span>
                <p>Open for Collaboration & Roles</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✆</div>
              <div>
                <span>Phone</span>
                <a href="tel:+919483242797">{personalInfo.phone}</a>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personalInfo.resumePath} download="Mohith_B_Resume.pdf">
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project, idea, or opportunity..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn" style={{ width: '100%', margin: '10px 0 0' }}>
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="contact-cta">
        <p>Prefer to connect directly?</p>
        <a href={`mailto:${personalInfo.email}`}>
          Send me an email →
        </a>
      </section>
    </>
  );
}
