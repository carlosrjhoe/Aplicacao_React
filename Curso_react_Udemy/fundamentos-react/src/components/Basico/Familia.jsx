import React from "react";
import FamiliaMembros from "./FamiliaMembros";

export default props => {
    return (
        <div>
            <FamiliaMembros nome="Carlos" sobreNome={props.sobreNome} />
            <FamiliaMembros nome="Mayara" {...props} /> {/* Spreed*/}
            <FamiliaMembros nome="Neto" sobreNome={props.sobreNome} />
            <FamiliaMembros nome="Luna" {...props}/>
            <FamiliaMembros nome="Emilly" {...props} />
        </div>
    )
}