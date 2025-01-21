// src/components/HeroBanner/HeroBanner.tsx
import React from 'react';
import './HeroBanner.scss';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../state/recipes/recipesSlice';
import { NAVIGATION_LINKS } from '../../config/config';
import { useNavigate } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterChange = (filter: string, label: string) => {
    dispatch(setFilter({ filter, label })); // Actualiza el filtro en el estado global
    navigate('/'); // Redirige al home
  };

  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>Recetas</h1>
        <p>para todos</p>
      </div>
      <nav className="hero-banner__nav">
        <ul>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index} onClick={() => handleFilterChange(item.filter, item.label)}>
              <img src={item.icon} alt={item.label} className="hero-banner__icon" />
              <a>
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
