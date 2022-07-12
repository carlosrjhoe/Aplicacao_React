import "./ListaVideoGames.css"
import React from "react";
import VideoGames from "../../data/videoGames"

export default props => {

    function getConsoles() {
        return VideoGames.map(console => {
            return (
                <tr>
                    <td>{console.id}</td>
                    <td>{console.console}</td>
                    <td>{console.marca}</td>
                    <td>{console.lancamento}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ListaVideoGames">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Console</th>
                        <th>Marca</th>
                        <th>Lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {getConsoles()}
                </tbody>
            </table>
        </div>
    )
}