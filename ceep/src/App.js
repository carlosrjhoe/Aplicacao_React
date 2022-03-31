import React, { Component } from "react";
import  FormularioCadastro  from "./componets/Formularioscadastro/FormularioCadastro";
import  ListaDeNotas  from "./componets/ListasDeNotas/ListaDeNotas";

class App extends Component {
  render () {
    return (
      <section>
      <FormularioCadastro/>
      <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
