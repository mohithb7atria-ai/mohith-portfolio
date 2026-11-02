import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = (page) => {
    setActivePage(page);
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <nav className={navOpen ? 'nav-open' : ''}>
      <div className="nav-brand" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
        <div className="logo-img">
          MB
        </div>
        <div className="logo">
          CODE & CREATE
        </div>
      </div>

      <button 
        className="mobile-toggle" 
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle Navigation"
      >
        {navOpen ? '✕' : '☰'}
      </button>

      <ul>
        <li>
          <a 
            className={activePage === 'home' ? 'active' : ''} 
            onClick={() => handleNav('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            className={activePage === 'about' ? 'active' : ''} 
            onClick={() => handleNav('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            className={activePage === 'projects' ? 'active' : ''} 
            onClick={() => handleNav('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            className={activePage === 'contact' ? 'active' : ''} 
            onClick={() => handleNav('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
