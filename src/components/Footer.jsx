import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenContact }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="glass-card footer-card card-interactive">
          <div className="footer-cta-left">
            <span className="section-badge">LET'S CONNECT</span>
            <h2 className="footer-title">Let's build scalable software together.</h2>
            <p className="footer-subtitle">
              Open to full-time Python Developer, Backend, and Full-Stack Engineering roles. Feel free to reach out directly.
            </p>
            <div className="footer-info-rows">
              <div>
                <span className="f-key">Email:</span>{' '}
                <a href={`mailto:${personalInfo.email}`} className="link-text">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="f-key">Phone:</span>{' '}
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="link-text">
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <span className="f-key">Location:</span>{' '}
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="footer-cta-right">
            <button className="btn btn-primary btn-lg full-w" onClick={onOpenContact}>
              <span>Send a Message</span>
              <span className="btn-arrow">→</span>
            </button>
            <div className="social-links-row">
              <a
                href="/Payal_Wankhade_Resume.pdf"
                download="Payal_Wankhade_Resume.pdf"
                className="social-pill"
                style={{
                  borderColor: 'rgba(99, 102, 241, 0.45)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                title="Download Payal Wankhade Resume"
              >
                <span>📥</span>
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                LinkedIn ↗
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="social-pill">
                Call Direct
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-pill">
                Email Direct
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {personalInfo.name} — Python Developer & Full-Stack Engineer.
          </span>
          <a href="#hero" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
