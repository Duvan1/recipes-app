import { useEffect, useState } from 'react';
import api from '../services/api';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get('recipes/random', {
          params: { number: 5 },
        });
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { recipes, loading };
};

export default useRecipes;
