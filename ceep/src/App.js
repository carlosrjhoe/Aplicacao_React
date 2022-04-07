import React, { Component } from "react";
import FormularioCadastro from "./componets/Formularioscadastro/";
import ListaDeNotas from "./componets/ListasDeNotas/";
import ListaCategorias from "./componets/ListaCategorias";
import "./assets/app.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias:["games", "Jogos"],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoStado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoStado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} 
        criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
