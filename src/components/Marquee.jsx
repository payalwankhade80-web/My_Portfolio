import { marqueeItems } from '../data/portfolioData';

export default function Marquee() {
  return (
    <section className="marquee-section" aria-label="Core Competencies & Affiliations">
      <div className="marquee-content">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="dot-sep">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
