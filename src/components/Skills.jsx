import { useState } from 'react';
import { skillCategories, skillGroups } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredGroups =
    activeFilter === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeFilter);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">02 // SKILLS & ARSENAL</span>
          <h2 className="section-title">Technical expertise & backend stack.</h2>
          <p className="section-desc">
            Programming languages, backend frameworks, relational databases, and enterprise API protocols tested across production environments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-wrapper" role="tablist" aria-label="Skills Category Filter">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="skills-grid" id="skillsGrid">
          {filteredGroups.map((group) => (
            <div key={group.title} className="glass-card skill-card card-interactive">
              <div className="skill-card-top">
                <div className={`skill-icon-badge ${group.iconBadge}`}>
                  {group.iconContent ? <span>{group.iconContent}</span> : <span>{group.iconEmoji}</span>}
                </div>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>

              <div className="skill-items-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill-item">
                    {skill.iconClass ? (
                      <i className={skill.iconClass} style={{ fontSize: '1.45rem' }}></i>
                    ) : (
                      <span style={{ fontSize: '1.25rem' }}>{skill.iconEmoji}</span>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
