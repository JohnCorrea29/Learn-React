import React, { useState, useEffect } from 'react';

export default function ScrollHoks (){

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Fase de update");

        const detectarScroll = () =>  setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll)

        return () => {
            window.removeEventListener("scroll", detectarScroll)
            //console.log("Fase de desmontaje");
        }
    }, [scrollY]);

    useEffect(() => {
        console.log("Fase de montaje")
    }, []);

    
    useEffect(() => {

    });

    useEffect(() => {
        return () => {
            //console.log("Fase de desmontaje");
        }
    });

    return(
        <>
            <h2>Scroll Hooks - useEffect</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}