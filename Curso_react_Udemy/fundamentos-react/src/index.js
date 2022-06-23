import ReactDOM from "react-dom";
import './index.css' // inportando arquivo CSS
import Primeiro from './components/Primeiro' // Importando 1° componente
import Segundo from './components/Segundo'
import ComParametro from './components/ComParametro'

// Sintaxe JSX
ReactDOM.render(
    <div>
        <h1>Olá mundo, Seja bem vindo!!!</h1>
        <Primeiro></Primeiro>
        <Segundo></Segundo>
        <ComParametro 
            titulo="Terceiro Componente"
            subtitulo="Muito massa essa passagem por parametro!!!">
        </ComParametro>
    </div>,
    document.getElementById('root')
)

// Sintaxe JavaScript
// const elemento = 'Olá Mundo!!!';
// ReactDOM.render(elemento, document.getElementById('root'))