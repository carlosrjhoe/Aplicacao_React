import React from "react";
import "./App.css";
import Aleatorio from "./components/Aleatorio";
import Imc from "./components/Imc";
import Card from "./components/layout/Card"
import ComParametros from "./components/ComParametro"
import Fragmento from "./components/Fragmento"
import Soma from "./components/Soma";
import Familia from "./components/Basico/Familia"
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import Produtos from "./components/Repeticao/Produtos"
import ListaVideoGames from "./components/Repeticao/ListaVideoGames"
import ParOuImpar from "./components/Condicional/parOuImpar";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Par ou Impar" color="#109830">
                    <ParOuImpar numero={2}></ParOuImpar>
                </Card>

                <Card titulo="Video Games" color="#762810">
                    <ListaVideoGames></ListaVideoGames>
                </Card>

                <Card titulo="Lista de produtos" color="#762543">
                    <Produtos></Produtos>
                </Card>

                {/* <Card titulo="Lista de Alunos" color="#436277">
                    <ListaAlunos />
                </Card> */}
                {/* Passando componentes com propriedades herdada de filhos/Pai
                <Card titulo="Exemplo componente com filhos" color="#777777">
                    <Familia sobreNome="Conceição" />
                </Card>

                {/* Passando a cor em exadecimal para a propriedade color */}
                {/* <Card titulo={"Exemplo de Card"} color="#E0FFFF">
                    <Aleatorio min={1} max={10} />
                </Card> */}

                {/* <Card titulo={"Imc"} color="#FFD700">
                    <Imc peso={75} altura={1.81} ></Imc>
                </Card> */}

                {/* <Card titulo={"ComParametros"} color="#F4A460">
                    <ComParametros titulo={"Olá mundo!"} subtitulo={"Vamos estudar ReactJS"}>

                    </ComParametros>
                </Card> */}

                {/* <Card titulo={"Fragmento"} color="#6B8E23">
                    <Fragmento></Fragmento>
                </Card> */}

                {/* <Card titulo={"Estudando"} color="#2F4F4F">
                    <Soma numero1={10} numero2={20} />
                </Card> */}
            </div>
        </div>
    )
} export default App;
