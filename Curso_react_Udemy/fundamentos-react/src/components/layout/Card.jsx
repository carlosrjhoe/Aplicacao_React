import React from "react";
import "./Card.css"

function Card(props) {
    const titulo = props.titulo;
    return (
        <div className="Card">
            <div className="Title">Conteúdo</div>
            <div className="Content"> {titulo} </div>
        </div>
    );
} export default Card;