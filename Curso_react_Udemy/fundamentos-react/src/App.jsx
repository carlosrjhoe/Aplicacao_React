import React from "react";
import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import ComParametro from "./components/ComParametro";
import Fragmento from "./components/Fragmento";

function App(props) {
    return (
        <div>
            <h1>Olá mundo, Seja bem vindo!!!</h1>
            <Primeiro></Primeiro>
            <Segundo></Segundo>
            <ComParametro>
                titulo="Terceiro Componente"
            subtitulo="Muito massa essa passagem por parametro!!!">
            </ComParametro>
            <Fragmento></Fragmento>
        </div>
    )
}export default App;