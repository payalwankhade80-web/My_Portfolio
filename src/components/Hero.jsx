import { useState, useEffect, useRef } from 'react';
import { personalInfo, metrics } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1400;
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts(
              metrics.map((m) => {
                const val = m.value * progress;
                return m.value % 1 !== 0 ? parseFloat(val.toFixed(1)) : Math.round(val);
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(metrics.map((m) => m.value));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Live Status Pill */}
        <div>
          <div className="status-pill">
            <span className="pulse-dot"></span>
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          {personalInfo.titleHeadline}
          <br />
          <span className="gradient-text">{personalInfo.titleGradient}</span>
        </h1>

        {/* Subtitle from Resume Summary */}
        <p className="hero-desc">
          I'm <strong>{personalInfo.name}</strong> — Computer Engineering graduate and{' '}
          <strong>Python & Full-Stack Developer</strong> with hands-on corporate experience in{' '}
          <strong>Python, Django, Node.js, React, and SQL databases</strong>. Dedicated to designing
          clean backend architectures, optimizing relational database schemas, and building
          scalable, secure web applications.
        </p>

        {/* Quick Contacts Bar */}
        <div className="contact-quick-bar">
          <a href={`mailto:${personalInfo.email}`} className="quick-pill">
            <span className="pill-icon">✉</span>
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="quick-pill">
            <span className="pill-icon">📞</span>
            <span>{personalInfo.phone}</span>
          </a>
          <span className="quick-pill static-pill">
            <span className="pill-icon">📍</span>
            <span>{personalInfo.location}</span>
          </span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-pill linkedin-pill"
          >
            <span className="pill-icon font-mono">in</span>
            <span>{personalInfo.linkedinDisplay}</span>
          </a>
        </div>

        {/* Action Buttons with Download Resume */}
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary btn-lg">
            <span>Explore Featured Work</span>
            <span className="btn-arrow">↓</span>
          </a>

          <a
            href="/Payal_Wankhade_Resume.pdf"
            download="Payal_Wankhade_Resume.pdf"
            className="btn btn-secondary btn-lg hero-resume-btn"
            title="Download Official Resume PDF"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
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
            <span>Download Resume</span>
          </a>

          <button className="btn btn-ghost btn-lg" onClick={onOpenContact}>
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Key Metrics Cards */}
        <div className="metrics-grid" ref={metricsRef}>
          {metrics.map((m, idx) => (
            <div key={m.label} className="metric-card card-interactive">
              <div className="metric-val">
                <span>{counts[idx]}</span>
                <span>{m.suffix}</span>
              </div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
