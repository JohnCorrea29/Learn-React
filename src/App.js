import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElemento from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEvento } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHoks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxApiHooks from "./components/AjaxApiHooks";
import CustomHooks from "./components/HooksCustom";
import Referencias from "./components/Referencias";

function App() {
  let nombre = "John";
  let auth = false;
  const putita = ["Que", "pasa", "putita"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              John <code>src/App.js</code> and save to reload.
            </p>
            <label htmlFor="nombre">Nombre de la puta</label>
            <input id="nombre" />
            <h1>{nombre}</h1>
            <p>{auth ? "Eres una putita" : "No eres una putita"}</p>
            <ul>
              {putita.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="Soy un componente putito con props" />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de txt"
              numero={21}
              boolean={true ? "Melo" : "Pailas"}
              arreglo={[1, 2, 3]}
              objeto={{
                nombre: "john",
                edad: 21,
              }}
              funcion={(num) => num + num}
              elementoReact={<i>Esto es un elemtno React</i>}
              componenteReact={
                <Componente msg="Papi lo mejor por las props (Componente)" />
              }
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElemento />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEvento />
            <hr />
            <Padre />
            <hr />
            {/* <CicloVida /> */}
            <hr />
            {/* <AjaxApis /> */}
            <hr />
            <ContadorHooks titulo="Seguidores"/>
            <hr />
            {/* <ScrollHoks/> */}
            <hr />
            <RelojHooks/>
            <hr />
            {/* <AjaxApiHooks/> */}
            <hr />
            {/* <CustomHooks/> */}
            <hr />
            <Referencias/>
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
