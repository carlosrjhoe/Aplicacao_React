import React from "react";
import alunos from "../../data/alunos"

export default props => {
    
    const Lis = alunos.map((aluno) => {
        return (
            <li> {aluno.id}) {aluno.nome} {"="} {aluno.nota}</li>
        )
    })
    
    return (
        <div>
            <ul>
                {Lis}
            </ul>
        </div>
    )
}