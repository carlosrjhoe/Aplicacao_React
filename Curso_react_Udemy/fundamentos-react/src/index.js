import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css'


// Sintaxe JSX
ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)

// Sintaxe JavaScript
// const elemento = 'Olá Mundo!!!';
// ReactDOM.render(elemento, document.getElementById('root'))