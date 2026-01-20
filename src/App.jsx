import React, { useState } from 'react';
import HomePage from './componets/Home';
import AboutPage from './componets/About';
import ProjectsPage from './componets/Projects';
import SkillsPage from './componets/Skills';
import ContactPage from './componets/Contact';
import Sidebar from './componets/Sidebar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage  setActiveSection={setActiveSection} />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="lg:ml-24 px-6 lg:px-12">
        {renderPage()}
      </main>
    </div>
  );
}