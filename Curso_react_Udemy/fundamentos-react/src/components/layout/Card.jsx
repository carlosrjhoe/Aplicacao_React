import React from "react";
import "./Card.css"

export default props => {
    return (
        <div className="Card">
            <h1 className="Title">Desafio Aleatório</h1> 
            <div className="Content"> {props.children} </div>
        </div>
    );
};