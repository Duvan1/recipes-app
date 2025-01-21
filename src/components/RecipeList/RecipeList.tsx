// src/components/RecipeList/RecipeList.tsx
import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.scss';

const RecipeList: React.FC = () => {
  const recipes = [
    { title: 'Ojingeo Muchim', rating: 5, image: '/images/ojingeo.png' },
    { title: 'Cola Chicken', rating: 5, image: '/images/cola.png' },
    { title: 'Roasted Carrot', rating: 4.5, image: '/images/carrot.png' },
    { title: 'Sweet Cherries', rating: 4, image: '/images/cherries.png' },
  ];

  return (
    <section className="recipe-list">
      <h2 className="recipe-list__title">Nuevas Recetas</h2>
      <div className="recipe-list__grid">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            rating={recipe.rating}
            image={recipe.image}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
