import { useEffect } from 'react';

export default function Lightbox({ image, onClose }) {
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

  if (!image) return null;

  return (
    <div
      className="lightbox-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close Fullscreen View">
        &times;
      </button>

      <div className="lightbox-box">
        <img src={image.url} alt={image.caption} className="lightbox-img" />
        <div className="lightbox-meta">
          <span>{image.caption}</span>
          <span className="font-mono">FULLSCREEN PREVIEW</span>
        </div>
      </div>
    </div>
  );
}
