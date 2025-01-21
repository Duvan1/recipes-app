import { render, screen } from '@testing-library/react';
import RecipeList from './RecipeList';

describe('RecipeList', () => {
  test('renders the title', () => {
    render(<RecipeList />);
    const titleElement = screen.getByText(/Nuevas Recetas/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all recipe cards', () => {
    render(<RecipeList />);
    const recipeTitles = ['Ojingeo Muchim', 'Cola Chicken', 'Roasted Carrot', 'Sweet Cherries'];
    recipeTitles.forEach((title) => {
      const cardElement = screen.getByText(title);
      expect(cardElement).toBeInTheDocument();
    });
  });
});
