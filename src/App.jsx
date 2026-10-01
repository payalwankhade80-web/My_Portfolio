import { useState } from 'react';
import TechCanvas from './components/TechCanvas';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Lightbox from './components/Lightbox';
import ContactModal from './components/ContactModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Ambient Animated Gradient Orbs */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />
      <div className="ambient-glow glow-3" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {/* Tech Particles Canvas */}
      <TechCanvas />

      {/* Smooth Cursor Glow Follower */}
      <CursorGlow />

      {/* Main Sticky Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Layout */}
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Marquee />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Education />
      </main>

      {/* Footer / Connect Section */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenLightbox={(image) => setLightboxImage(image)}
        />
      )}

      {/* Full-Screen Lightbox Image Zoom */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}

      {/* Get in Touch Message Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
