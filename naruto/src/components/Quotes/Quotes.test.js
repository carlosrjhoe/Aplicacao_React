import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button/Button";
import { Quotes } from "./Quotes";

test('Renderizando o botão e o texto', () => {
  render(<Quotes />);
  
  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByText('Carlos');

  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test("Chama o callback quando o butão é clicado", () => {
  const callback = jest.fn();

  render(<Quotes onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalledTimes(1);
});