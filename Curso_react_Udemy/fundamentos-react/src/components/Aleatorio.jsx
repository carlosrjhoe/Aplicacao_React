import React from "react";

function Aleatorio (props) {
    const min = props.min;
    const max = props.max;
    // const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min))+ min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor minimo: </strong> {min} </p>
            <p><strong>Valor maximo: </strong> {max} </p>
            <p><strong>Valor Escolhido: </strong> {aleatorio} </p>
        </div>
    )
} export default Aleatorio;