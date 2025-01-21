// src/services/recipeService.ts
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config/config';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  rating: number;
}

export const fetchRandomRecipes = async (count: number = 4): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/random`, {
      params: { apiKey: API_KEY, number: count },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      subtitle: recipe.dishTypes?.[0] || 'Unknown',
      image: recipe.image,
      rating: recipe.spoonacularScore || Math.random() * 5, // Si no hay score, generar uno
    }));
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    throw error;
  }
};
