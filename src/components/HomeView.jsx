import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function HomeView({ setActivePage }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-center">
          <p className="one">
            <span className="intro-text">Hi.. I'm Mohith B</span>
            ✦ AVAILABLE FOR COLLABORATION & ROLES ✦
          </p>

          <h1 className="two">
            Creating Digital <br />
            <span className="bold">Experiences</span> <br />
            That Stand Out.
          </h1>

          <p className="three">
            {personalInfo.introduction}
          </p>
        </div>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section className="tech-section">
        <p className="section-small">
          MY TECH STACK
        </p>

        <h2>
          Technologies I <span>Work With.</span>
        </h2>

        <div className="tech-container">
          <div className="tech-card">
            <h3>Python</h3>
            <p>AI, Computer Vision & Backend</p>
          </div>

          <div className="tech-card">
            <h3>React.js</h3>
            <p>Modern Frontend Interfaces</p>
          </div>

          <div className="tech-card">
            <h3>Node.js</h3>
            <p>Scalable Backend Services</p>
          </div>

          <div className="tech-card">
            <h3>OpenCV & MediaPipe</h3>
            <p>Real-Time Computer Vision</p>
          </div>

          <div className="tech-card">
            <h3>MongoDB & Supabase</h3>
            <p>Database Architecture & Cloud</p>
          </div>

          <div className="tech-card">
            <h3>GitHub & GCP</h3>
            <p>Version Control & Cloud Deployment</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <a onClick={() => navigateTo('projects')} className="btn" style={{ cursor: 'pointer' }}>
            View My Work ↗
          </a>

          <a onClick={() => navigateTo('contact')} className="btn btn-secondary" style={{ cursor: 'pointer' }}>
            Contact Me
          </a>

          <a 
            href={personalInfo.resumePath} 
            download="Mohith_B_Resume.pdf" 
            className="btn btn-secondary"
            style={{ cursor: 'pointer' }}
          >
            Download Resume ↓
          </a>
        </div>
      </section>
    </>
  );
}
