import React, { Component } from 'react';
import "./estilo.css";
class ListaDeCategorias extends Component {
  
  _handleEventoInput(e) {
    console.log(e.Key)
    if(e.Key == "Enter"){
      console.log("Adicionar categoria");
    }
  }
  render() { 
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias-lista">
          <li className='lista-categorias-item'>Categorias</li>
          <li className='lista-categorias-item'>Categorias</li>
          <li className='lista-categorias-item'>Categorias</li>
          <li className='lista-categorias-item'>Categorias</li>
      </ul>
      <input type="text" className='lista-categorias-input' placeholder='Adicionar Categoria' onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    
    );
  }
}
 
export default ListaDeCategorias;