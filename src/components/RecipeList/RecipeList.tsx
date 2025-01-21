// src/components/RecipeList/RecipeList.tsx
import React, { useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import useRecipes from '../../hooks/useRecipes';
import './RecipeList.scss';

const DEFAULT_RECIPES_LIMIT = 12;

const RecipeList: React.FC = () => {
  const { recipes, loading, error, loadMore } = useRecipes(4); // Carga inicial de 4 recetas
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    await loadMore(DEFAULT_RECIPES_LIMIT); // Cargar 4 recetas adicionales
    setIsLoadingMore(false);
  };

  if (loading && recipes.length === 0) {
    return <div className="recipe-list__loading">Cargando recetas...</div>;
  }

  if (error) {
    return <div className="recipe-list__error">{error}</div>;
  }

  return (
    <section className="recipe-list">
      <h2 className="recipe-list__title text-secondary text-color-primary">Nuevas Recetas</h2>
      <div className="recipe-list__grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
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
