import React, { useState } from 'react';
import './index.css';

import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("About");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutMe />;
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };


  const getPageClass = () => {
    switch (activeSection) {
      case "About":
        return "page-greet";
      case "Education":
        return "page-education";
      case "Experience":
        return "page-experience";
      case "Skills":
        return "page-skills";
      case "Contact":
        return "page-contact";
      default:
        return "page-greet";
    }
  };

  return (
    <div className={`${getPageClass()} min-h-screen flex flex-col`}>

      {/* Glow overlay (Laravel-style ambiance) */}
      <div className="fixed inset-0 pointer-events-none
                      bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.08),transparent_60%)]
                      shadow-[inset_0_0_180px_rgba(255,140,0,0.25)]">
      </div>

      {/* HEADER */}
      <header className="text-center py-8 border-b border-amber-800 bg-black/40 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold tracking-widest
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
                       bg-clip-text text-transparent">
          WELCOME TO MY PORTFOLIO!
        </h1>
        <p className="text-amber-500 text-sm mt-2">
          By Charlie C. Lipago
        </p>
      </header>

      {/* NAV */}
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-5xl mx-auto p-6 relative z-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

      </main>

<footer className="text-center py-6 border-t border-amber-800 bg-black/40 backdrop-blur-sm">
  <p className="text-amber-500 text-sm tracking-wide">
    &copy; 2026 Charlie
  </p>
</footer>

    </div>
  );
}

export default App;