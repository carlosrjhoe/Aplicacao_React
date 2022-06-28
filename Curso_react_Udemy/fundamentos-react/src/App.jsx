import React from "react";
import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import ComParametro from "./components/ComParametro";
import Fragmento from "./components/Fragmento";
import QuartoComponente from "./components/QuartoComponente";
import QuintoComponente from "./components/QuintoComponente"
import Aleatorio from "./components/Aleatorio";

function App(props) {
    return (
        <div>
            <Aleatorio  min={10} max={100}/>
            <QuintoComponente />
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