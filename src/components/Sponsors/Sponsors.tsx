// src/components/Sponsor/Sponsor.tsx
import React from 'react';
import './Sponsors.scss';

const Sponsor: React.FC = () => {
  return (
    <section className="sponsor">
      <h2 className="sponsor__title text-color-secondary">Con el Patrocinio de</h2>
      <div className="sponsor__image">
        <img src="src/assets/products.png" alt="Patrocinadores" />
      </div>
    </section>
  );
};

export default Sponsor;
