import ReactDOM from "react-dom";
import './index.css' // inportando arquivo CSS
import Primeiro from './components/primeiro' // Importando 1° componente

// Sintaxe JSX
ReactDOM.render(
    <div>
        <h1>Olá mundo, Seja bem vindo!!!</h1>
        <Primeiro></Primeiro>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)

// Sintaxe JavaScript
// const elemento = 'Olá Mundo!!!';
// ReactDOM.render(elemento, document.getElementById('root'))