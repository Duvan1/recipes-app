import React from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_LINKS } from '../../config/config';
import { setFilter } from '../../state/recipes/recipesSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../state/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentFilter = useSelector((state: RootState) => state.recipes.filter);

  const handleFilterChange = (filter: string, label: string) => {
    dispatch(setFilter({ filter, label }));
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate('/')}>
        <span className="header__logo--recipe">Recipe</span>
        <span className="header__logo--app">App</span>
      </div>
      <div className="header__home">
        <img
          src="src/assets/ic_home.png"
          alt="icon home"
          onClick={() => handleFilterChange('main course', 'Platos Principales')}
        />
      </div>
      <nav className="header__nav">
        <ul>
          {NAVIGATION_LINKS.map((link, index) => (
            <li
              key={`${link.filter}-${index}`}
              className={currentFilter === link.filter ? 'text-color-primary' : 'text-color-secondary'}
              onClick={() => handleFilterChange(link.filter, link.label)}
            >
              <a className="text-normal text-primary">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
