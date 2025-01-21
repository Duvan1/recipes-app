import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config/config';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  rating: number;
}

export interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  summary: string;
  instructions: string;
}

export const fetchRecipeDetails = async (id: string): Promise<RecipeDetails> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los detalles de la receta:', error);
    throw new Error('No se pudieron cargar los detalles de la receta.');
  }
};

export const fetchRandomRecipes = async (count: number = 4, filter: string = ''): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/random`, {
      params: {
        apiKey: API_KEY,
        number: count,
        tags: filter, // Agregamos el filtro como parámetro "tags"
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      subtitle: recipe.dishTypes?.[0] || 'Unknown',
      image: recipe.image,
      rating: recipe.spoonacularScore || Math.random() * 5,
    }));
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
