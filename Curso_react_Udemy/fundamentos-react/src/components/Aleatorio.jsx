import React from "react";

function Aleatorio (props) {
    const min = props.min;
    const max = props.max;
    const aleatorio = parseInt(Math.random() * (max - min));
    return (
        <div>
            <h1>Valor Aleatório</h1>
            <button className="botao">Aperte aqui!</button>
            <p><strong>Valor minimo: </strong> {min} </p>
            <p><strong>Valor maximo: </strong> {max} </p>
            <p><strong>Valor Escolhido: </strong> {aleatorio} </p>
        </div>
    )
} export default Aleatorio;