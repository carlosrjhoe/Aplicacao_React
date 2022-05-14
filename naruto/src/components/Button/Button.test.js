import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Renderizar button com texto", () => {
  render(<Button>Teste</Button>)

  const buttonEl = screen.getByText("Teste");
  expect(buttonEl).toBeInTheDocument();
});