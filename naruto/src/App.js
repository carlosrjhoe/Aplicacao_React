import styled from "styled-components";
import { Quotes } from "./components/Quotes/Quotes";
import narutoImg from "./images/naruto.png";
import { getQuote } from "./services";

function App() {
  const onUpdate = () => {
    console.log('teste');
  };

  return (
    <Content>
      <Quotes onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Imagem de Naruto com uma kunai"/>
    </Content>
  );
}

const Content = styled.div`
  height: 100vw;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App;
