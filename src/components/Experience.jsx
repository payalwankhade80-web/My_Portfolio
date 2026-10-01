import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">04 // EXPERIENCE LOG</span>
          <h2 className="section-title">Where the engineering hours went.</h2>
          <p className="section-desc">
            Hands-on professional experience spanning production backend systems, CRM engineering, and database optimization.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-entry">
              <div className={`timeline-pin ${exp.active ? 'active-pin' : ''}`}></div>
              <div className={`glass-card timeline-card card-interactive ${exp.active ? 'active-glow' : ''}`}>
                <div className="timeline-card-header">
                  <div>
                    <span className={`company-badge ${exp.companyBadge}`}>
                      {exp.companyCode} · {exp.company}
                    </span>
                    <h3 className="timeline-role">{exp.role}</h3>
                  </div>
                  <span className={`timeline-period ${exp.periodBadge || ''}`}>
                    {exp.period}
                  </span>
                </div>

                <p className="timeline-text">{exp.summary}</p>

                <ul className="timeline-bullets">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
