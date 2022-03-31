import React, { Component } from "react";
import  FormularioCadastro  from "./componets/Formularioscadastro/";
import  ListaDeNotas  from "./componets/ListasDeNotas/";
import "./assets/app.css"
import "./assets/index.css"

class App extends Component {
  render () {
    return (
      <section className="conteudo">
      <FormularioCadastro/>
      <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
