import React from "react";

// function Components
function ImparOuPar(props) {
    const isPar = props.numero % 2 === 0;
    return (
        <div>
            { isPar ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
} export default ImparOuPar;