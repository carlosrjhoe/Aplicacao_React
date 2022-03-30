import React, { Component } from "react";
import CardNotas from "./cardNotas";

class ListaDeNotas extends Component{

  render(){
    return <ul>{Array.of("Trabalho", "trabalho", "Estudos").map(categoria => {
      return (
        <li>
          <div>{categoria}</div>
          <CardNotas/>
        </li>
      )
    })}</ul>
  }
}
export default ListaDeNotas;