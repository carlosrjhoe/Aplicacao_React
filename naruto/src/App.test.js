import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderizando o app com botao', () => {
  render(<App />);
  
  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();
});
