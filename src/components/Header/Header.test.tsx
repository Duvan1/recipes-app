import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import recipesReducer, { setFilter } from '../../state/recipes/recipesSlice';
import Header from './Header';

describe('Header Component', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        recipes: recipesReducer,
      },
      preloadedState: {
        recipes: {
          filter: '',
          label: 'Todas las Recetas',
          loading: false,
        },
      },
    });

    store.dispatch = jest.fn();
  });

  it('renders the header logo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Recipe/i)).toBeInTheDocument();
    expect(screen.getByText(/App/i)).toBeInTheDocument();
  });

  it('updates the filter and navigates to home on link click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.getByText(/Vegetarianos/i); // Ejemplo de un enlace
    fireEvent.click(link);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ filter: 'vegetarian', label: 'Vegetarianos' })
    );
  });
});
