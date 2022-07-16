import React, { useState } from "react";


export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(event) {
        setValor(event.target.value)
    }
    
    return (
        <div>
            <form>
                <label>
                    <h2>{valor}</h2>
                    <input value={valor} onChange={quandoMudar}/>
                </label>
            </form>
        </div>
    )
}