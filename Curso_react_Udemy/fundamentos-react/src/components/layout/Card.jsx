import React from "react";
import "./Card.css"

export default (props) => {

    const estilo = {
        backgroundColor: props.color,
    }

    return (
        <div className="Card" style={estilo}>
            <h1 className="Title">{props.titulo}</h1> 
            <div className="Content"> 
                {props.children} 
            </div>
        </div>
    );
};