import { rest } from 'msw';
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const response = { speaker: 'speaker', quote: 'test quote'};
// 'http://127.0.0.1:5000'
const server = setupServer(
  rest.get('http://127.0.0.1:5000', (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renderizando o app com botao', () => {
  render(<App />);
  
  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();
});

test('Chamando a API com o butão e atualizando o testo', async () =>{
  render(<App />);

  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});
