import React from "react";

// Utilizando um function component
function ParOuImpar(props) {
    // Tratando o valor passado por props, vendo o resto da divisão se é = 0, se for, quer dizer que o número passado é par. Caso contrario, é impar.
    const resultado = props.numero % 2 === 0;
    return (
        <div>
            {/* Aqui estou renderizando por condicional e utilizando o operador ternário valor do resultado se é par ou impar. */}
            { resultado ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
} export default ParOuImpar;