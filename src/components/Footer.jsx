import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActivePage }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h2>
            MOHITH<span> B</span>
          </h2>
          <p>
            Computer Science Engineering Student, Full-Stack Developer & AI/ML Enthusiast building modern, responsive and high-performing digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <a onClick={() => navigateTo('home')}>Home</a>
          <a onClick={() => navigateTo('about')}>About</a>
          <a onClick={() => navigateTo('projects')}>Projects</a>
          <a onClick={() => navigateTo('contact')}>Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Let's Connect</h3>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            Email
          </a>
          <a href={personalInfo.resumePath} download="Mohith_B_Resume.pdf">
            Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mohith B. All Rights Reserved.</p>
        <p className="footer-made">Designed & Built by Mohith B</p>
      </div>
    </footer>
  );
}
