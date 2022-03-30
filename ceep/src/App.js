import React, { Component } from "react";
import  FormularioCadastro  from "./componets/FormularioCadastro";
import  ListaDeNotas  from "./componets/ListaDeNotas";

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
