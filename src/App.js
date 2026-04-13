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

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">

      <header className="text-center py-6 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>

      <Navbar 
        setActiveSection={setActiveSection} 
        activeSection={activeSection}
      />

      <main className="max-w-4xl mx-auto p-6 relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

      </main>

    </div>
  );
}

export default App;