import React from "react";

function ParOuImpar(props) {
    const resultado = props.numero % 2 === 0;
    return (
        <div>
            { resultado ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
} export default ParOuImpar;