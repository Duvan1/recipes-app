import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { fetchRandomRecipes, fetchRecipeDetails, RecipeDetails } from '../services/recipeService';
import { setLoading } from '../state/recipes/recipesSlice';

interface Recipe {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  rating: number;
}


const useRecipes = (initialCount: number = 4) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.recipes.filter);

  // Cargar recetas
  useEffect(() => {
    const loadRecipes = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchRandomRecipes(initialCount, filter);
        setRecipes(data);
      } catch (err) {
        console.error('Error al cargar recetas', err);
        setError('Error al cargar las recetas.');
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadRecipes();
  }, [filter, initialCount, dispatch]);

  // Cargar más recetas
  const loadMore = async (count: number = 4) => {
    setLoadingMore(true);
    try {
      const data = await fetchRandomRecipes(count, filter);
      setRecipes((prev) => [...prev, ...data]);
    } catch (err) {
      console.error('Error al cargar más recetas', err);
      setError('Error al cargar más recetas.');
    } finally {
      setLoadingMore(false);
    }
  };

  // Obtener detalles de receta
  const getRecipeDetails = async (id: string) => {
    dispatch(setLoading(true));
    try {
      const data = await fetchRecipeDetails(id); // Llamada al servicio correcto
      setRecipeDetails(data);
    } catch (err) {
      console.error('Error al cargar los detalles de la receta:', err);
      setError('Error al cargar los detalles de la receta.');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { recipes, recipeDetails, loadingMore, error, loadMore, getRecipeDetails };
};

export default useRecipes;
