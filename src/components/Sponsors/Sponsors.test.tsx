import { render, screen } from '@testing-library/react';
import Sponsor from './Sponsors';

jest.mock('../../assets/products.png', () => '/mocked-products.png');

describe('Sponsor Component', () => {
  it('renders the sponsor title', () => {
    render(<Sponsor />);

    // Verifica que el título se renderiza correctamente
    expect(screen.getByText(/Con el Patrocinio de/i)).toBeInTheDocument();
    expect(screen.getByText(/Con el Patrocinio de/i)).toHaveClass('sponsor__title');
  });

  it('renders the sponsor image with correct src and alt', () => {
    render(<Sponsor />);

    // Verifica que la imagen se renderiza con el src y alt correctos
    const image = screen.getByAltText(/Patrocinadores/i);
    expect(image).toHaveAttribute('src', '/mocked-products.png');
    expect(image).toHaveAttribute('alt', 'Patrocinadores');
  });

  it('matches the snapshot', () => {
    const { container } = render(<Sponsor />);
    expect(container).toMatchSnapshot();
  });
});
