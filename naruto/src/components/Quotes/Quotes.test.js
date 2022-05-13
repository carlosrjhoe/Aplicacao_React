import { render, screen } from "@testing-library/react";
import { Quotes } from "./Quotes";

test('Renderizando o botão e o texto', () => {
  render(<Quotes />);
  
  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByText('Carlos');

  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});