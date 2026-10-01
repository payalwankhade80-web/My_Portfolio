import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">01 // ABOUT ME</span>
          <h2 className="section-title">Engineered architecture backed by clean code.</h2>
          <p className="section-desc">
            Combining rigorous computer engineering discipline with modern backend development to build secure, high-throughput digital systems.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Story Card */}
          <div className="glass-card about-story card-interactive">
            <h3 className="story-title">Delivering Scalable & Secure Software Solutions</h3>
            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p className="highlight-quote">
              "{personalInfo.quote}"
            </p>

            <div className="role-pills">
              {personalInfo.roles.map((r) => (
                <span key={r.title} className={`role-pill ${r.color}`}>
                  ✦ {r.title}
                </span>
              ))}
            </div>
          </div>

          {/* Dossier Details Card */}
          <div className="glass-card about-details card-interactive">
            <h3 className="details-heading">Candidate Dossier</h3>

            <div className="info-list">
              <div className="info-item">
                <span className="info-key">Name:</span>
                <span className="info-value">{personalInfo.name}</span>
              </div>
              <div className="info-item">
                <span className="info-key">Role:</span>
                <span className="info-value">{personalInfo.role}</span>
              </div>
              <div className="info-item">
                <span className="info-key">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="info-value link-text">
                  {personalInfo.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-key">Phone:</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="info-value link-text">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="info-item">
                <span className="info-key">Location:</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <span className="info-key">LinkedIn:</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value link-text"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
              <div className="info-item">
                <span className="info-key">Education:</span>
                <span className="info-value">{personalInfo.degree}</span>
              </div>
              <div className="info-item">
                <span className="info-key">Status:</span>
                <span className="info-value" style={{ color: 'var(--accent-green)', fontWeight: 600 }}>
                  Immediate Joiner / Active
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="languages-wrapper">
              <span className="lang-header">Languages:</span>
              <div className="lang-tags">
                {personalInfo.languages.map((l) => (
                  <span key={l.name} className="lang-tag">
                    {l.name} <small>({l.level})</small>
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Download Action Area */}
            <div
              className="dossier-actions"
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center'
              }}
            >
              <a
                href="/Payal_Wankhade_Resume.pdf"
                download="Payal_Wankhade_Resume.pdf"
                className="btn btn-primary btn-sm full-w"
                title="Download Payal Wankhade Resume PDF"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
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
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="/Payal_Wankhade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title="Preview Resume in New Tab"
              >
                <span>View ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
