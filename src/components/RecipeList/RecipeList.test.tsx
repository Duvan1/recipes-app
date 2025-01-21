import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../../state/recipes/recipesSlice';
import useRecipes from '../../hooks/useRecipes';
import RecipeList from './RecipeList';

jest.mock('../../hooks/useRecipes');

describe('RecipeList Component', () => {
  const mockLoadMore = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRecipes as jest.Mock).mockReturnValue({
      recipes: [],
      loadingMore: false,
      error: null,
      loadMore: mockLoadMore,
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderWithProvider = (ui: React.ReactNode, preloadedState: any) => {
    const store = configureStore({
      reducer: {
        recipes: recipesReducer,
      },
      preloadedState: {
        recipes: preloadedState,
      },
    });

    return render(<Provider store={store}>{ui}</Provider>);
  };

  it('renders loading state when loadingMore is true and recipes are empty', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipes: [],
      loadingMore: true,
      error: null,
      loadMore: mockLoadMore,
    });

    renderWithProvider(<RecipeList />, { label: 'Todas las Recetas', filter: '', loading: false });

    expect(screen.getByText(/Cargando recetas.../i)).toBeInTheDocument();
  });

  it('renders error message when error exists', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipes: [],
      loadingMore: false,
      error: 'Error al cargar las recetas.',
      loadMore: mockLoadMore,
    });

    renderWithProvider(<RecipeList />, { label: 'Todas las Recetas', filter: '', loading: false });

    expect(screen.getByText(/Error al cargar las recetas./i)).toBeInTheDocument();
  });

  it('renders empty state when no recipes are found', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipes: [],
      loadingMore: false,
      error: null,
      loadMore: mockLoadMore,
    });

    renderWithProvider(<RecipeList />, { label: 'Vegetarianos', filter: '', loading: false });

    expect(screen.getByText(/No se encontraron recetas para "Vegetarianos"./i)).toBeInTheDocument();
    expect(screen.getByAltText(/Not found/i)).toBeInTheDocument();
  });

  it('renders recipes when available', () => {
    const mockRecipes = [
      { id: 1, title: 'Pizza', image: '/images/pizza.png', rating: 4.5 },
      { id: 2, title: 'Salad', image: '/images/salad.png', rating: 4.7 },
    ];

    (useRecipes as jest.Mock).mockReturnValue({
      recipes: mockRecipes,
      loadingMore: false,
      error: null,
      loadMore: mockLoadMore,
    });

    renderWithProvider(<RecipeList />, { label: 'Todas las Recetas', filter: '', loading: false });

    expect(screen.getByText(/Nuevas Recetas/i)).toBeInTheDocument();
    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Salad')).toBeInTheDocument();
  });

  it('calls loadMore when "Cargar Más" button is clicked', () => {
    const mockRecipes = [
      { id: 1, title: 'Pizza', image: '/images/pizza.png', rating: 4.5 },
    ];

    (useRecipes as jest.Mock).mockReturnValue({
      recipes: mockRecipes,
      loadingMore: false,
      error: null,
      loadMore: mockLoadMore,
    });

    renderWithProvider(<RecipeList />, { label: 'Todas las Recetas', filter: '', loading: false });

    const loadMoreButton = screen.getByText(/Cargar Más/i);
    fireEvent.click(loadMoreButton);

    expect(mockLoadMore).toHaveBeenCalledTimes(1);
  });
});
