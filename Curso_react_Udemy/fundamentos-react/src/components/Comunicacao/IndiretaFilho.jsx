import React from "react";

export default props => {
    const cb = props.quandoClicar
    const min = 30
    const max = 60
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min 
    // função (geraIdade) que irá gerar um número aleatório entre (30 ~ 60)

    const gerarNerd = () => Math.random() > 0.5
    // função (gerarNerd) que irá gerar verdadeiro se for maior que 0.5, caso contrario, vai gerar falso.

    return (
        <div>
            <button onClick={_ => cb('Carlos', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}