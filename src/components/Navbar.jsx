import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsLight(false);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
      setIsLight(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-wrapper">
        <a href="#hero" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-avatar">PW</span>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-tag">Python & Full-Stack</span>
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile view resume download link */}
          <a
            href="/Payal_Wankhade_Resume.pdf"
            download="Payal_Wankhade_Resume.pdf"
            className="nav-item mobile-resume-link"
            style={{ color: 'var(--accent-indigo)', fontWeight: 600 }}
            onClick={() => setMenuOpen(false)}
          >
            📄 Download Resume
          </a>
        </nav>

        <div className="nav-right">
          {/* Theme Toggle Button */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Dark and Light Theme"
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLight ? (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Resume Download Option in Navbar */}
          <a
            href="/Payal_Wankhade_Resume.pdf"
            download="Payal_Wankhade_Resume.pdf"
            className="btn btn-sm btn-secondary desktop-resume-btn"
            title="Download Payal Wankhade Resume (PDF)"
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Resume</span>
          </a>

          <a href={`mailto:${personalInfo.email}`} className="btn btn-sm btn-primary">
            <span>Let's Talk</span>
            <span className="btn-arrow">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
