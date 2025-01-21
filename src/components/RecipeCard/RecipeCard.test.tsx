import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';

describe('RecipeCard Component', () => {
  const mockRecipe = {
    id: 1,
    title: 'Delicious Pizza Recipe',
    image: '/images/pizza.png',
    rating: 4.5,
  };

  const renderWithRouter = (ui: React.ReactNode) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  it('renders the recipe card content', () => {
    renderWithRouter(<RecipeCard {...mockRecipe} />);

    // Verificar que el título, imagen y calificación están presentes
    expect(screen.getByText('Delicious Pizza')).toBeInTheDocument(); // Primera parte del título
    expect(screen.getByText('Recipe')).toBeInTheDocument(); // Segunda parte del título
    expect(screen.getByAltText('Delicious Pizza Recipe')).toHaveAttribute(
      'src',
      '/images/pizza.png'
    );
    expect(screen.getByText('⭐ 4.5')).toBeInTheDocument(); // Calificación
  });

  it('renders the title with primary and secondary words split correctly', () => {
    renderWithRouter(<RecipeCard {...mockRecipe} />);

    // Verificar las palabras divididas del título
    const primaryWords = screen.getByText('Delicious Pizza');
    const secondaryWords = screen.getByText('Recipe');

    expect(primaryWords).toHaveClass('text-primary text-color-primary');
    expect(secondaryWords).toHaveClass('text-secondary text-color-primary');
  });

  it('navigates to the correct URL on click', () => {
    renderWithRouter(<RecipeCard {...mockRecipe} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/recipe/1'); // Verifica la URL
  });
});
