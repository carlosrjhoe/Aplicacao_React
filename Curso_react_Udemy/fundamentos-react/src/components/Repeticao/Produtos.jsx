import './TabelaProdutos.css'
import React from "react";
import Produtos from "../../data/produtos";

export default props => {

    function getLinhas() {
        return Produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}