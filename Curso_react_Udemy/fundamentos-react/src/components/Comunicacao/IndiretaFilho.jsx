import React from "react";

export default props => {
    
    return (
        <div>
            <div>Filho</div>
            <button onClick={function(e) {
                props.quandoClicar('Carlos', 36, true)
            }}>Fornecer Informações</button>
        </div>
    )
}