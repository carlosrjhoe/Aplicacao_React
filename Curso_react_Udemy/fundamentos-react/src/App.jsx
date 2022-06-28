import React from "react";
import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import ComParametro from "./components/ComParametro";
import Fragmento from "./components/Fragmento";
import QuartoComponente from "./components/QuartoComponente";

function App(props) {
    return (
        <div>
            <h1>Olá mundo, Seja bem vindo!!!</h1>
            <Primeiro/>
            <Segundo/>
            <ComParametro>
                titulo="Terceiro Componente"
            subtitulo="Muito massa essa passagem por parametro!!!">
            </ComParametro>
            <Fragmento/>
            <QuartoComponente/>
        </div>
    )
}export default App;