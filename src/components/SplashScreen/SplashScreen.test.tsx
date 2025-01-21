import { render, screen } from '@testing-library/react';
import SplashScreen from './SplashScreen';

describe('SplashScreen Component', () => {
  it('renders the splash screen container', () => {
    render(<SplashScreen />);

    // Verifica que el contenedor principal se renderiza
    const splashScreen = screen.getByRole('status');
    expect(splashScreen).toHaveClass('splash-screen');
  });

  it('renders the spinner inside the splash screen', () => {
    render(<SplashScreen />);

    // Verifica que el spinner se renderiza dentro del contenedor
    const spinner = screen.getByRole('status').firstChild;
    expect(spinner).toHaveClass('splash-screen__spinner');
  });

  it('matches the snapshot', () => {
    const { container } = render(<SplashScreen />);
    expect(container).toMatchSnapshot();
  });
});
