import React, { Component } from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        //console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }
    
    restar(e) {
        //console.log("Restar");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


/* Propiedades inicializadas */

export class EventosES7 extends Component {
    state = {
        contador: 0
    }


    sumar = (e) => {
        //console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }
    
    restar = (e) => {
        //console.log("Restar");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>

/* function Boton (props){
    return(
        <button onClick={props.myOnClick}>Botón hecho componente</button>
    )
} */

export class MasSobreEvento extends Component {
    handleClick = (e, mensaje) => {
        //console.log("El evento");
        //console.log(e.nativeEvent);
        //console.log(e.nativeEvent.target);
        //console.log(mensaje)
    }

    render(){
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento")}>Saludar</button>
                {/* Evento personalizado */}
                {/* <Boton onClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento")}/> */}
                <Boton myOnClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento")}/>
            </div>
        )
    }
}