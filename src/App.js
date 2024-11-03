import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'src/components/Header';
import { About } from 'src/components/About';
import { Projects } from 'src/components/Projects';
import { Skills } from 'src/components/Skills';
import { Contact } from 'src/components/Contact';
import { Testimonials } from 'src/components/Testimonials';

export const App =() => {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
    </Router>
  );
}