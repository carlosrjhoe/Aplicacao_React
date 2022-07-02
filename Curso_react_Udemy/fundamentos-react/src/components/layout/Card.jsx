import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div className="Card">
            <h1 className="Title">Desafio Aleatório</h1>
            <div className="Content"> {props.children} </div>
        </div>
    );
} export default Card;