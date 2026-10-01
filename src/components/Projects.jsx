import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">03 // FEATURED PROJECTS</span>
          <h2 className="section-title">Selected case studies & production systems.</h2>
          <p className="section-desc">
            Production-grade web applications, REST API architectures, and database solutions engineered with Python, Django, React, and Node.js.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card card-interactive"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectProject(project)}
            >
              <div className="project-media">
                <img
                  src={project.coverImg}
                  alt={`${project.title} Preview`}
                  className="project-cover-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="overlay-cta">View Case Study & Architecture →</span>
                </div>
                <span className="project-year-badge">{project.year}</span>
              </div>

              <div className="project-body">
                <span className="project-company">{project.company}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
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
