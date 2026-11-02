import React, { useState, useEffect } from 'react';
import './reference.css';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';

export default function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').replace('/', '').toLowerCase();
    if (['about', 'projects', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '').toLowerCase();
      if (['home', 'about', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        {activePage === 'home' && <HomeView setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutView setActivePage={setActivePage} />}
        {activePage === 'projects' && <ProjectsView />}
        {activePage === 'contact' && <ContactView />}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
