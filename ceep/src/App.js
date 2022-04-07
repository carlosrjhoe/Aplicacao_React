import React, { Component } from "react";
import FormularioCadastro from "./componets/Formularioscadastro/";
import ListaDeNotas from "./componets/ListasDeNotas/";
import ListaCategorias from "./componets/ListaCategorias";
import "./assets/app.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias} 
          criarNota={this.notas.criarNota}/>
        <main className="conteudo-principal">
          <ListaCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}/>
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
