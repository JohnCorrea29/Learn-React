import React from 'react';
import PropTypes from "prop-types"

export default function Propiedades(props){
    return (
        <>
            <h3>{props.default}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.edad}</li>
                <li>{props.arreglo.map(props.funcion).join(",")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}

Propiedades.defaultProps = {
    default: "Props"
};

Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired
};