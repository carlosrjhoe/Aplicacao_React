import React from "react";
import "./App.css";
import Card from "./components/layout/Card"
import ListaVideoGames from "./components/Repeticao/ListaVideoGames"
import Produtos from "./components/Repeticao/Produtos"
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";
import ComParametros from "./components/ComParametro"
import Fragmento from "./components/Fragmento"
import Soma from "./components/Soma";
import Familia from "./components/Basico/Familia"
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import IndiretaPai from "./components/Comunicacao/IndiretaPai"
import input from "./components/formulario/Input";
import Input from "./components/formulario/Input";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Componente controlado">
                    <Input/>
                </Card>

                {/*<Card titulo="Comunicação Indireta" color="#515151">
                    <IndiretaPai></IndiretaPai>
                </Card>
                
                <Card titulo="Comunicação Direta" color="#242424">
                    <DiretaPai></DiretaPai>
                </Card>
                
                <Card titulo="Par ou Impar">
                    <ParOuImpar numero={10}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Carlos'}} ></UsuarioInfo>
                    <UsuarioInfo usuario={{email: ''}} ></UsuarioInfo>
                </Card>

                <Card titulo="Video Games" color="#762810">
                    <ListaVideoGames></ListaVideoGames>
                </Card>

                <Card titulo="Lista de produtos" color="#762543">
                    <Produtos></Produtos>
                </Card>

                <Card titulo="Lista de Alunos" color="#436277">
                    <ListaAlunos />
                </Card>

                Passando componentes com propriedades herdada de filhos/Pai
                <Card titulo="Exemplo componente com filhos" color="#777777">
                    <Familia sobreNome="Conceição" />
                </Card>

                // Passando a cor em exadecimal para a propriedade color
                <Card titulo={"Exemplo de Card"} color="#E0FFFF">
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo={"Imc"} color="#FFD700">
                    <Imc peso={75} altura={1.81} ></Imc>
                </Card>

                <Card titulo={"ComParametros"} color="#F4A460">
                    <ComParametros titulo={"Olá mundo!"} subtitulo={"Vamos estudar ReactJS"}>

                    </ComParametros>
                </Card>

                <Card titulo={"Fragmento"} color="#6B8E23">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo={"Estudando"} color="#2F4F4F">
                    <Soma numero1={10} numero2={20} />
                </Card> */}
            </div>
        </div>
    )
} export default App;
