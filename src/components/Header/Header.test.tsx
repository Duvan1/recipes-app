// src/components/Header/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the logo correctly', () => {
    render(<Header />);
    const logoElement = screen.getByText(/RecipeApp/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Header />);
    const links = ['Home', 'Vegetarianos', 'Platos Principales', 'Tortas', 'Comida Rápida', 'Menú Niños', 'Sopas'];
    links.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
