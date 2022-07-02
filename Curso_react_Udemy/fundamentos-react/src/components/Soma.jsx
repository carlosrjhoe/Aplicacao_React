import React from "react";

export default (props) => {
    var numero1 = props.numero1;
    var numero2 = props.numero2;

    var numero1 = parseInt(Math.random() * (numero1 - numero2)) + numero1;
    var numero2 = parseInt(Math.random() * (numero1 - numero2)) + numero2;
    return(
        <div>
            <p>Primeiro número = {numero1}</p>
            <p>Segundo número = {numero2}</p>
            <p>A soma = {numero1 + numero2}</p>
        </div>
    )
}