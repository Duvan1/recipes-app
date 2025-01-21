import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRecipes from '../../hooks/useRecipes';
import './RecipeDetails.scss';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { recipeDetails, getRecipeDetails, error } = useRecipes();

  useEffect(() => {
    if (id && !isNaN(Number(id)) && (!recipeDetails || recipeDetails.id !== Number(id))) {
      // Solo cargar si no se tienen los detalles o si el ID es diferente
      getRecipeDetails(id);
    }
  }, [id, recipeDetails, getRecipeDetails]);

  if (!recipeDetails && !error) {
    return <div className="recipe-details__loading">Cargando detalles de la receta...</div>;
  }

  if (error) {
    return <div className="recipe-details__error">{error}</div>;
  }

  return (
    <div className="recipe-details">
      <h1 className="recipe-details__title">{recipeDetails?.title}</h1>
      <img className="recipe-details__image" src={recipeDetails?.image} alt={recipeDetails?.title} />
      <div
        className="recipe-details__summary"
        dangerouslySetInnerHTML={{ __html: recipeDetails?.summary || '' }}
      />
      <div className="recipe-details__instructions">
        <h2>Instrucciones</h2>
        <p>{recipeDetails?.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
