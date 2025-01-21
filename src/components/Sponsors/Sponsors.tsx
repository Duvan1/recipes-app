// src/components/Sponsors/Sponsors.tsx
import React from 'react';
import './Sponsors.scss';

const Sponsors: React.FC = () => {
  const sponsors = [
    '/images/sponsor1.png',
    '/images/sponsor2.png',
    '/images/sponsor3.png',
    '/images/sponsor4.png',
  ];

  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Con el Patrocinio de</h2>
      <div className="sponsors__logos">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            className="sponsors__logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
