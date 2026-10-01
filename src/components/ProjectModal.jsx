import { useEffect } from 'react';

export default function ProjectModal({ project, onClose, onOpenLightbox }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-box glass-card">
        <button className="modal-close" onClick={onClose} aria-label="Close Case Study">
          &times;
        </button>

        <div className="modal-header-meta">
          <span className="modal-tag">{project.badge}</span>
          <span className="modal-co">{project.company} ({project.year})</span>
        </div>

        <h2 className="modal-title" id="modal-title">{project.title}</h2>

        <div className="modal-pills">
          {project.tags.map((tag) => (
            <span key={tag} className="modal-pill">
              {tag}
            </span>
          ))}
        </div>

        <hr className="modal-sep" />

        <div className="modal-sec">
          <h4>Architecture & System Overview</h4>
          <p>{project.overview}</p>
        </div>

        <div className="modal-sec">
          <h4>Key Engineering Deliverables & Implementation</h4>
          <ul className="modal-list">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="modal-sec">
          <h4>
            Interactive System Preview <small>(Click image for full-screen zoom)</small>
          </h4>
          <div className="modal-gallery">
            {project.screenshots.map((shot, idx) => (
              <div
                key={idx}
                className="gallery-card"
                onClick={() => onOpenLightbox(shot)}
              >
                <img src={shot.url} alt={shot.caption} loading="lazy" />
                <div className="gallery-cap">{shot.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
