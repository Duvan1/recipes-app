// src/components/HeroBanner/HeroBanner.tsx
import React from 'react';
import './HeroBanner.scss';

const HeroBanner: React.FC = () => {
  const navItems = [
    { label: 'Vegetarianos', icon: '../../assets/ic_vegetarianos.svg', href: '#vegetarianos' },
    { label: 'Principales', icon: '../../assets/ic_principales.svg', href: '#principales' },
    { label: 'Tortas', icon: '../../assets/ic_tortas.svg', href: '#tortas' },
    { label: 'Rápida', icon: '../../assets/ic_rapida.svg', href: '#rapida' },
    { label: 'Menú Niños', icon: '../../assets/ic_menu_ninos.svg', href: '#ninos' },
    { label: 'Sopas', icon: '../../assets/ic_sopas.svg', href: '#sopas' },
  ];

  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>Recetas</h1>
        <p>para todos</p>
      </div>
      <nav className="hero-banner__nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <img src={item.icon} alt={item.label} className="hero-banner__icon" />
              <a href={item.href}>
                <span className='text-normal text-primary text-color-secondary'>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default HeroBanner;
