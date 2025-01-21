import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import recipesReducer from './state/recipes/recipesSlice';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

describe('App Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderWithProviders = (ui: React.ReactNode, initialState: any, route: string) => {
    const store = configureStore({
      reducer: {
        recipes: recipesReducer,
      },
      preloadedState: {
        recipes: initialState,
      },
    });

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </Provider>
    );
  };

  it('should render the SplashScreen when loading is true', () => {
    renderWithProviders(<App />, { loading: true }, '/');

    expect(screen.getByText(/Cargando/i)).toBeInTheDocument(); // Asegúrate de que el texto exista en SplashScreen
  });

  it('should render the RecipeList at "/" route', () => {
    renderWithProviders(<App />, { loading: false }, '/');

    expect(screen.getByText(/Nuevas Recetas/i)).toBeInTheDocument(); // Texto del título en RecipeList
  });

  it('should render RecipeDetails at "/recipe/:id" route', () => {
    renderWithProviders(
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>,
      { loading: false },
      '/recipe/1'
    );

    expect(screen.getByText(/Cargando detalles de la receta/i)).toBeInTheDocument(); // Texto inicial de RecipeDetails
  });

  it('should not render SplashScreen when loading is false', () => {
    renderWithProviders(<App />, { loading: false }, '/');

    expect(screen.queryByText(/Cargando/i)).not.toBeInTheDocument(); // SplashScreen no debería estar visible
  });
});
