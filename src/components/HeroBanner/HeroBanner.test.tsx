import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import HeroBanner from './HeroBanner';
import recipesReducer, { setFilter } from '../../state/recipes/recipesSlice';

jest.mock('../../config/config', () => ({
  NAVIGATION_LINKS: [
    { label: 'Vegetarianos', filter: 'vegetarian', icon: '/icons/vegetarian.png' },
    { label: 'Platos Principales', filter: 'main course', icon: '/icons/main-course.png' },
    { label: 'Tortas', filter: 'desserts', icon: '/icons/desserts.png' },
  ],
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('HeroBanner Component', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        recipes: recipesReducer,
      },
    });

    store.dispatch = jest.fn();
  });

  const renderWithProviders = (ui: React.ReactNode) =>
    render(
      <Provider store={store}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    );

  it('renders HeroBanner content', () => {
    renderWithProviders(<HeroBanner />);

    expect(screen.getByText(/Recetas/i)).toBeInTheDocument();
    expect(screen.getByText(/para todos/i)).toBeInTheDocument();
  });

  it('renders navigation links with icons', () => {
    renderWithProviders(<HeroBanner />);

    const links = screen.getAllByRole('listitem');
    expect(links).toHaveLength(3); // Basado en el mock de NAVIGATION_LINKS

    links.forEach((link, index) => {
      const label = ['Vegetarianos', 'Platos Principales', 'Tortas'][index];
      const iconSrc = ['/icons/vegetarian.png', '/icons/main-course.png', '/icons/desserts.png'][index];

      expect(link).toHaveTextContent(label);
      expect(screen.getByAltText(label)).toHaveAttribute('src', iconSrc);
    });
  });

  it('dispatches setFilter action and navigates to home on link click', () => {
    renderWithProviders(<HeroBanner />);

    const vegetarianLink = screen.getByText(/Vegetarianos/i);
    fireEvent.click(vegetarianLink);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ filter: 'vegetarian', label: 'Vegetarianos' })
    );
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
