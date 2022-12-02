import React from 'react';
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos(){
    let myStyles = {
        borderRadius: '50px',
        margin: '0 auto',
        maxWidth: '50%',
        backgroundColor: '#000'
    }
    return(
        <>
            <section className="estilos">
                <h2>Estilos CSS en react</h2>
                <h3 className="bg-react">
                    Estilos en CSS Externa
                </h3>
                <h3 className="bg-react" style={{
                    borderRadius: '50px',
                    margin: '1rem 2rem'
                }}>
                    Estilos en linea
                </h3>
                <h3 className="estilosLinea" style={myStyles}>
                    En linea mbb con variable
                </h3>
                Agregando Normalize
                <br />
                <code>@import-normalize;</code>
                <h3 className={moduleStyles.error}>Estilos con modulos</h3>
                <h3 className={moduleStyles.success}>Estilos con modulos</h3>
                <h3 className="bg-sass">Estilos con sass</h3>
            </section>
        </>
    )
}