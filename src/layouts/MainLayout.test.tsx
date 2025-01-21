import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

jest.mock('../components/Header/Header', () => () => <div>Mocked Header</div>);
jest.mock('../components/HeroBanner/HeroBanner', () => () => <div>Mocked HeroBanner</div>);
jest.mock('../components/Sponsors/Sponsors', () => () => <div>Mocked Sponsor</div>);

describe('MainLayout Component', () => {
  it('renders the Header component', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>
    );

    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
  });

  it('renders the HeroBanner component', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>
    );

    expect(screen.getByText('Mocked HeroBanner')).toBeInTheDocument();
  });

  it('renders the Sponsor component', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>
    );

    expect(screen.getByText('Mocked Sponsor')).toBeInTheDocument();
  });

  it('renders the children passed to it', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>
    );

    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
