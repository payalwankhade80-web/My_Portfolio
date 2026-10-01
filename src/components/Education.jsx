import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">05 // EDUCATION</span>
          <h2 className="section-title">Academic milestones & foundations.</h2>
          <p className="section-desc">
            Strong academic credentials in Computer Engineering providing rigorous foundations in computer science theory and software development.
          </p>
        </div>

        <div className="edu-grid">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-card edu-card card-interactive ${
                edu.featured ? 'featured-edu' : ''
              }`}
            >
              <div className="edu-top">
                <span className={`edu-year ${edu.pillColor}`}>
                  {edu.period} · {edu.score}
                </span>
                <span className="edu-score font-mono">{edu.location}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-inst">{edu.institution}</p>
              <p className="edu-highlights">{edu.highlights}</p>

              <div className="edu-bar-track">
                <div
                  className={`edu-bar-fill ${
                    idx === 0 ? 'fill-orange' : 'fill-purple'
                  }`}
                  style={{ width: edu.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
