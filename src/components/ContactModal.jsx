import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'python-dev',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: 'python-dev', message: '' });
      onClose();
    }, 1600);
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="modal-box glass-card contact-modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close Contact Modal">
          &times;
        </button>

        <div className="modal-header-meta">
          <span className="modal-tag">GET IN TOUCH</span>
        </div>

        <h2 className="modal-title" id="contact-title">Send a message</h2>
        <p className="modal-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Or reach out directly at{' '}
          <a href={`mailto:${personalInfo.email}`} className="link-text">
            {personalInfo.email}
          </a>{' '}
          / <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="link-text">{personalInfo.phone}</a>
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="cName">Your Name</label>
            <input
              type="text"
              id="cName"
              required
              placeholder="e.g. Hiring Manager / Technical Recruiter"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="cEmail">Email Address</label>
            <input
              type="email"
              id="cEmail"
              required
              placeholder="your.name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="cType">Opportunity Type</label>
            <select
              id="cType"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="python-dev">Python / Django Developer Role</option>
              <option value="fullstack">Full-Stack (React & Node.js) Position</option>
              <option value="backend">Backend & SQL Database Engineer</option>
              <option value="corporate">Corporate Software Engineer Opportunity</option>
              <option value="other">General Inquiry / Consultation</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="cMsg">Message</label>
            <textarea
              id="cMsg"
              rows="4"
              required
              placeholder="Tell me about your tech requirements, project, or role..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg full-w"
            style={
              submitted
                ? {
                    background: 'var(--accent-green)',
                    color: '#FFF',
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)'
                  }
                : {}
            }
          >
            {submitted ? (
              <span>Message Sent! ✨</span>
            ) : (
              <>
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
