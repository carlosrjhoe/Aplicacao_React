import React from "react";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";

function App() {
    return (
        <div>
            <Aleatorio  min={1} max={10}/>        
        </div>
    )
} export default App;
