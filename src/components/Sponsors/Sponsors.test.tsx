import { render, screen } from '@testing-library/react';
import Sponsors from './Sponsors';

describe('Sponsors', () => {
  test('renders the title', () => {
    render(<Sponsors />);
    const titleElement = screen.getByText(/Con el Patrocinio de/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all sponsor logos', () => {
    render(<Sponsors />);
    const sponsorLogos = screen.getAllByRole('img');
    expect(sponsorLogos.length).toBe(4); // Ajusta según el número de sponsors
  });
});
