// src/components/RecipeList/RecipeList.tsx
import React, { useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import useRecipes from '../../hooks/useRecipes';
import './RecipeList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const DEFAULT_RECIPES_LIMIT = 12;

const RecipeList: React.FC = () => {
  const { recipes, loadingMore, error, loadMore } = useRecipes(DEFAULT_RECIPES_LIMIT);
  const label = useSelector((state: RootState) => state.recipes.label);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    await loadMore(DEFAULT_RECIPES_LIMIT); // Cargar 4 recetas adicionales
    setIsLoadingMore(false);
  };

  if (loadingMore && recipes.length === 0) {
    return <div className="recipe-list__loading">Cargando recetas...</div>;
  }

  if (error) {
    return <div className="recipe-list__error">{error}</div>;
  }

  if (recipes.length === 0) {
    return (
      <div className="recipe-list__empty">
        <img src="../../assets/not-found.png" alt={'Not found'} />
        <p>No se encontraron recetas para "{label}".</p>
      </div>
    );
  }

  return (
    <section className="recipe-list">
      <h2 className="recipe-list__title text-secondary text-color-primary">
        Nuevas Recetas {' '}
        {label && <span className="recipe-list__filter text-primary text-medium"> ({label})</span>}
      </h2>
      <div className="recipe-list__grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            rating={recipe.rating}
          />
        ))}
      </div>
      <div className="recipe-list__actions">
        <button
          className="button button--primary"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? 'Cargando...' : 'Cargar Más'}
        </button>
      </div>
    </section>
  );
};

export default RecipeList;
