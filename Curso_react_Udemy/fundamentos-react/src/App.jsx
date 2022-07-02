import React from "react";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";
import Card from "./components/layout/Card"
import ComParametros from "./components/ComParametro"
import Fragmento from "./components/Fragmento"

function App() {
    return (
        <div className="Card">
            <Card titulo={"Exemplo de Card"}> 
                <Aleatorio  min={1} max={10}/>
            </Card>

            <Card titulo={"Imc"}> 
                <Imc  peso={75} altura={1.81} ></Imc>
            </Card>

            <Card titulo={"ComParametros"}>
                <ComParametros titulo={"Olá mundo!"} subtitulo={"Vamos estudar ReactJS"}>
                    
                </ComParametros>
            </Card>

            <Card titulo={"Fragmento"}>
                <Fragmento></Fragmento>
            </Card>
        </div>
    )
} export default App;
