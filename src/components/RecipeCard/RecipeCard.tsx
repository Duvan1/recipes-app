// src/components/RecipeCard/RecipeCard.tsx
import React from 'react';
import './RecipeCard.scss';

interface RecipeCardProps {
  title: string;
  rating: number;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, rating, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-card__image" />
      <h3 className="recipe-card__title">{title}</h3>
      <div className="recipe-card__details">
        <span>⭐ {rating}</span>
        <button className="recipe-card__favorite">❤️</button>
      </div>
    </div>
  );
};

export default RecipeCard;
