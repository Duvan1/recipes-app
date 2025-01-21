import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  test('renders the recipe card with title and image', () => {
    render(<RecipeCard title="Test Recipe" rating={5} image="/test-image.jpg" />);
    const titleElement = screen.getByText(/Test Recipe/i);
    const imageElement = screen.getByAltText(/Test Recipe/i);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test('displays the correct rating', () => {
    render(<RecipeCard title="Test Recipe" rating={4.5} image="/test-image.jpg" />);
    const ratingElement = screen.getByText(/⭐ 4.5/i);
    expect(ratingElement).toBeInTheDocument();
  });
});

