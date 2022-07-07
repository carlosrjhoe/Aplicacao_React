import React, { cloneElement } from "react";
// import FamiliaMembros from "./FamiliaMembros";

export default props => {
    return (
        <div>
            {
                React.Children.map(props.children, (el) => {
                    return cloneElement(el, props)
                })
            }
        </div>
    )
}