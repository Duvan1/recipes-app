import { render, screen } from '@testing-library/react';
import HeroBanner from './HeroBanner';

describe('HeroBanner', () => {
  test('renders the banner title', () => {
    render(<HeroBanner />);
    const titleElement = screen.getByText(/Recetas para todos/i);
    expect(titleElement).toBeInTheDocument();
  });
});
