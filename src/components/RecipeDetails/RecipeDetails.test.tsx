import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import useRecipes from '../../hooks/useRecipes';
import RecipeDetails from './RecipeDetails';

jest.mock('../../hooks/useRecipes');

describe('RecipeDetails Component', () => {
  const mockGetRecipeDetails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRecipes as jest.Mock).mockReturnValue({
      recipeDetails: null,
      getRecipeDetails: mockGetRecipeDetails,
      error: null,
    });
  });

  const renderWithRouter = (path: string) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

  it('renders loading state initially', () => {
    renderWithRouter('/recipe/1');

    expect(screen.getByText(/Cargando detalles de la receta/i)).toBeInTheDocument();
    expect(mockGetRecipeDetails).toHaveBeenCalledWith('1');
  });

  it('renders error message when error is present', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipeDetails: null,
      getRecipeDetails: mockGetRecipeDetails,
      error: 'Error al cargar los detalles de la receta.',
    });

    renderWithRouter('/recipe/1');

    expect(screen.getByText(/Error al cargar los detalles de la receta./i)).toBeInTheDocument();
    expect(mockGetRecipeDetails).toHaveBeenCalledWith('1');
  });

  it('renders recipe details when data is available', () => {
    const mockDetails = {
      id: 1,
      title: 'Delicious Pizza',
      image: '/images/pizza.png',
      summary: '<p>Summary of the recipe</p>',
      instructions: 'Bake for 20 minutes.',
    };

    (useRecipes as jest.Mock).mockReturnValue({
      recipeDetails: mockDetails,
      getRecipeDetails: mockGetRecipeDetails,
      error: null,
    });

    renderWithRouter('/recipe/1');

    expect(screen.getByText('Delicious Pizza')).toBeInTheDocument();
    expect(screen.getByAltText('Delicious Pizza')).toHaveAttribute('src', '/images/pizza.png');
    expect(screen.getByText('Instrucciones')).toBeInTheDocument();
    expect(screen.getByText('Bake for 20 minutes.')).toBeInTheDocument();
    expect(screen.getByText(/Summary of the recipe/i)).toBeInTheDocument();
  });

  it('does not call getRecipeDetails if the ID is invalid', () => {
    renderWithRouter('/recipe/invalid-id');

    expect(mockGetRecipeDetails).not.toHaveBeenCalled();
  });
});
