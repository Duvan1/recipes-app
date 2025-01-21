// src/hooks/useRecipes.ts
import { useEffect, useState } from 'react';
import { fetchRandomRecipes, Recipe } from '../services/recipeService';

const useRecipes = (initialCount: number = 4) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count] = useState(initialCount);

  const loadMore = async (additionalCount: number = 4) => {
    try {
      setLoading(true); // Indicar que estamos cargando más datos
      const newRecipes = await fetchRandomRecipes(additionalCount);
      setRecipes((prev) => [...prev, ...newRecipes]); // Añadir recetas a las existentes
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Error al cargar más recetas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialRecipes = async () => {
      await loadMore(count); // Carga inicial
    };

    loadInitialRecipes();
  }, [count]);

  return { recipes, loading, error, loadMore };
};

export default useRecipes;
