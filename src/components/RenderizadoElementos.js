import React, { Component } from 'react';
import data from '../helpers/data.json'

function Lista(props){
    return (
        <li>
            <a href={props.el.web}>{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElemento extends Component{
    constructor(props){
        super(props)
        this.state = {
            estados: ["Primavera", "Invierno", "Otoño", "Verano"]
        }
    }
    render(){
        //console.log("Data", data)
        return(
            <div>
                <h2>Renderizado Elemento</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.estados.map((el, index) => (<li key={index}>{el}</li>))}
                </ol>
                <h3>Frameworks Front Best</h3>
                <ul>
                    {
                        data.framework.map((el) => (
                        <Lista key={el.id} el={el}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}