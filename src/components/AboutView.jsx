import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutView({ setActivePage }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">
        <div className="about-bg-text">ABOUT</div>

        <div className="about-hero-content">
          <p className="section-small">GET TO KNOW ME</p>
          <h1>
            More Than Just <span>Code.</span>
          </h1>
          <p className="about-hero-text">
            I'm Mohith B, a Computer Science & Engineering student from Bengaluru, India and a passionate developer focused on creating modern, responsive and practical digital experiences.
          </p>
        </div>
      </section>

      {/* ================= WHO I AM ================= */}
      <section className="who-section">
        <div className="who-image">
          <div className="image-glow"></div>
          <img src={personalInfo.profileImage} alt="Mohith B" />
        </div>

        <div className="who-content">
          <p className="section-small">WHO I AM</p>
          <h2>
            Building Ideas Into <span>Digital Experiences.</span>
          </h2>
          <p>
            {personalInfo.aboutText}
          </p>
          <p>
            I'm constantly learning new technologies, improving my skills, and exploring creative ways to build practical, high-impact digital products.
          </p>

          <div className="about-buttons">
            <a onClick={() => navigateTo('projects')} className="btn" style={{ cursor: 'pointer' }}>
              Explore My Work
            </a>
            <a onClick={() => navigateTo('contact')} className="btn btn-secondary" style={{ cursor: 'pointer' }}>
              Let's Connect
            </a>
            <a 
              href={personalInfo.resumePath} 
              download="Mohith_B_Resume.pdf" 
              className="btn btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="services-section">
        <div className="section-heading">
          <p className="section-small">WHAT I DO</p>
          <h2>
            Things I Love <span>Building.</span>
          </h2>
        </div>

        <div className="services-container">
          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Web Development</h3>
            <p>
              Building modern, responsive and high-performing full-stack web applications using React.js, Node.js, and modern APIs.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <h3>AI & Computer Vision</h3>
            <p>
              Developing real-time computer vision systems using Python, OpenCV, MediaPipe pose detection, and Generative AI workflows.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <h3>Hackathons & Innovation</h3>
            <p>
              Engineering high-impact solutions for Smart India Hackathon 2026 (Dual Track Selection) and Unimerge Hackathon (Winner).
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="journey-section">
        <div className="section-heading">
          <p className="section-small">MY JOURNEY</p>
          <h2>
            Always Learning. <span>Always Building.</span>
          </h2>
        </div>

        <div className="journey-container">
          <div className="journey-line"></div>

          <div className="journey-item">
            <div className="journey-dot"></div>
            <div className="journey-year">START</div>
            <div className="journey-content">
              <h3>Presidency PU College (2023)</h3>
              <p>
                Completed Higher Secondary Education (PUC) with distinction, building a rigorous pre-university foundation in Mathematics and Computer Science.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>
            <div className="journey-year">LEARNING</div>
            <div className="journey-content">
              <h3>B.E. Computer Science & Engineering (2025–Present)</h3>
              <p>
                Studying at Atria Institute of Technology, Bengaluru. Maintaining an academic CGPA of 8.83 while developing full-stack applications and AI systems.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>
            <div className="journey-year">INTERNSHIP</div>
            <div className="journey-content">
              <h3>Web Development Intern – WebStack Academy (June–July 2026)</h3>
              <p>
                Developed "Food Genie", an AI-powered food ordering application using React.js, Node.js, Express, Stripe payments, and Git collaborative workflows.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>
            <div className="journey-year">NOW</div>
            <div className="journey-content">
              <h3>SIH 2026 Dual Track & Technical Leadership</h3>
              <p>
                Selected in Top 10 for both Hardware (Mine Safety) & Software (Livelihood Navigator) tracks at SIH 2026, Winner of Unimerge Hackathon, and active Atria AI Club Member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <p className="section-small">LET'S CREATE SOMETHING</p>
        <h2>
          Have an Idea? <span>Let's Build It.</span>
        </h2>
        <p>
          I'm always interested in new ideas, projects and opportunities.
        </p>
        <a onClick={() => navigateTo('contact')} className="btn" style={{ cursor: 'pointer' }}>
          Let's Work Together →
        </a>
      </section>
    </>
  );
}
