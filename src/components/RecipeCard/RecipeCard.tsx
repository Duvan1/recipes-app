// src/components/RecipeCard/RecipeCard.tsx
import React from 'react';
import './RecipeCard.scss';

interface RecipeCardProps {
  title: string;
  image: string;
  rating: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image, rating }) => {
  // Dividir el título en palabras
  const titleWords = title.split(' ');
  const primaryWord = titleWords[0]; // Primera palabra
  const secondaryWords = titleWords.slice(1).join(' '); // Palabras restantes

  return (
    <div className="recipe-card">
      <div className="recipe-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="recipe-card__bg">
        <div className="recipe-card__content">
          <h3 className="recipe-card__title">
            <span className="text-primary text-color-primary">{primaryWord}</span>{' '}
            <span className="text-secondary text-color-primary">{secondaryWords}</span>
          </h3>
        </div>
        <div className="recipe-card__info">
          <span className="recipe-card__rating text-primary text-color-secondary">⭐ {rating.toFixed(1)}</span>
          <span className="recipe-card__favorite">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
