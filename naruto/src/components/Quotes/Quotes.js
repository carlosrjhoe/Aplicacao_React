import style from "styled-components";
import { Button } from "../Button/Button";

export const Quotes = ({ quote, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>
        <p>Carlos</p>
        <Button onClick={onUpdate}>Kage Bunshin no Jutsu</Button>
      </Quote>
    </Wrapper>
  )
}

const Wrapper = style.div`
  flex: 1;
  displey: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = style.p`
  font-size: 2em;
  flex: 1;
  margin: 0;
`;
