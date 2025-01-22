import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('prueba simple', () => {
  const { getByText } = render(<div>Hola Mundo</div>);
  expect(getByText(/Hola Mundo/i)).toBeInTheDocument();
});
