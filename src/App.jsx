import React, { useState, useEffect } from 'react';
import HomePage from './components/Home';
import AboutPage from './components/About';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';
import ContactPage from './components/Contact';
import Sidebar from './components/sidebar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="lg:ml-24">
        <section id="home"><HomePage setActiveSection={setActiveSection} /></section>
        <section id="about"><AboutPage /></section>
        <section id="projects"><ProjectsPage setActiveSection={setActiveSection} /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="contact"><ContactPage /></section>
      </main>
    </div>
  );
}