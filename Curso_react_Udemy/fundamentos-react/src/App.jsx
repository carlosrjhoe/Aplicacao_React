import React from "react";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";

function App() {
    return (
        <div>
            <Aleatorio  min={1} max={100}/>
            <Imc peso={85} altura={1.81}/>          
        </div>
    )
} export default App;
