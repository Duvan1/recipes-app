// src/components/Header/Header.tsx
import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Vegetarianos', href: '#vegetarianos' },
    { label: 'Platos Principales', href: '#principales' },
    { label: 'Tortas', href: '#tortas' },
    { label: 'Comida Rápida', href: '#rapida' },
    { label: 'Menú Niños', href: '#ninos' },
    { label: 'Sopas', href: '#sopas' },
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo--recipe">Recipe</span>
        <span className="header__logo--app">App</span>
      </div>
      <nav className="header__nav">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={'text-normal text-primary'}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
