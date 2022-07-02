import React from "react";
import "./App.css";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";
import Card from "./components/layout/Card"
import ComParametros from "./components/ComParametro"
import Fragmento from "./components/Fragmento"
import Soma from "./components/Soma";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo={"Exemplo de Card"}>
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo={"Imc"}>
                    <Imc peso={75} altura={1.81} ></Imc>
                </Card>

                <Card titulo={"ComParametros"}>
                    <ComParametros titulo={"Olá mundo!"} subtitulo={"Vamos estudar ReactJS"}>

                    </ComParametros>
                </Card>

                <Card titulo={"Fragmento"}>
                    <Fragmento></Fragmento>
                </Card>

                <Card>
                    <Soma numero1={10} numero2={20}  />
                </Card>
            </div>
        </div>
    )
} export default App;
