import React from "react";

function Imc(props) {
    var peso = props.peso;
    var altura = props.altura;
    var imc = peso / Math.pow(altura, 2);
    return (
        <div>
            <form>
                <fieldset className="formulario">
                    <legend>Calculo de IMC</legend>
                    <p>
                        Peso:
                        <input type="text" name="peso" />
                    </p>
                    <p>
                        Altura:
                        <input type="text" name="altura" />
                    </p>
                </fieldset>
                <input type="submit" value="Enviar" onClick="msg"/>
            </form>
            <h4><strong>Seu Imc é: </strong> {imc.toFixed(2)} </h4>
        </div>
    )
} export default Imc