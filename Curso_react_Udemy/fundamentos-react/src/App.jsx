import React from "react";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";
import Card from "./components/layout/Card"

function App() {
    return (
        <div>
            <Card titulo={'Exemplo de Card'}/>
            <Aleatorio  min={1} max={10}/>        
        </div>
    )
} export default App;
