import React from "react";
import "./Card.css"

export default (props) => {

    // Criando um objeto com cores
    const cardStyle = {
        backgroundColor: props.color,
    }

    return (
        // Passando o o objeto como parametro para a propriedade style.
        <div className="Card" style={cardStyle}>
            <h1 className="Title">{props.titulo}</h1> 
            <div className="Content"> 
                {props.children} 
            </div>
        </div>
    );
};