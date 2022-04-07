import React, { Component } from 'react';
import "./estilo.css"
class ListaDeCategorias extends Component {
  
  _handleEventoInput(e) {
    if(e.key === "Enter"){
      let valorcategoria = e.target.value;
      this.props.adicionarCategoria(valorcategoria);
    }
  }
  render() { 
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias-lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li Key={index} className='lista-categorias_item'>{categoria}
            </li>
            );
          })}
        </ul>
        <input type="text"
          className='lista-categorias-input' 
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}
 
export default ListaDeCategorias;