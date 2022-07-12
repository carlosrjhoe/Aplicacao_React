import './TabelaProdutos.css'
import React from "react";
import Produtos from "../../data/produtos"; // importando o arquivo produto.JS

export default props => {

    function getLinhas() {
        // Esta função vai retornar as linhas
        return Produtos.map((produto, i) => {
            return (
                // Aplicando class de forma condicional, de forma que vai me retornar a tabela tipo zebrada
                <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    {/* Retornando o valor do produto com 2 casas decimais e trocando o "." pela "," */}
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            {/* Definir uma tabela */}
            <table> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Chamando a função para mostrar as linhas */}
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}