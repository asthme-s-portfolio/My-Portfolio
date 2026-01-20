// import { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, Menu, X, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

// Sidebar.jsx Component
function Sidebar({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-b from-purple-600 to-purple-800 text-white w-24 flex flex-col items-center py-8 z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="mb-12">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-bold text-xl">KA</span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`p-3 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-white/20 scale-110'
                  : 'hover:bg-white/10'
              }`}
              title={item.label}
            >
              <item.icon size={24} />
            </button>
          ))}
        </nav>

        <button className="mt-auto p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </aside>
    </>
  );
}
export default Sidebar;