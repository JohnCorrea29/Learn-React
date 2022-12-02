import React, { useState } from 'react';

/* export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [puta, setPuta] = useState("");
    const [raza, setRaza] = useState("");
    const [putita, setPutita] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("La puta quedo llena de leche");
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="nombre"
                    value={nombre}
                    onChange={(el) => setNombre(el.target.value)}
                />
                <p>Elige tu puta favorita</p>
                <input type="radio" name="puta" id="Mariana" value="Mariana" defaultChecked onChange={(el) => setPuta(el.target.value)} />
                <label htmlFor="Mariana">Mariana</label>
                <input type="radio" name="puta" id="Sofia" value="Sofia" onChange={(el) => setPuta(el.target.value)} />
                <label htmlFor="Sofia">Sofia</label>
                <input type="radio" name="puta" id="Stefa" value="Stefa" onChange={(el) => setPuta(el.target.value)} />
                <label htmlFor="Stefa">Stefa</label>
                <input type="radio" name="puta" id="Hilary" value="Hilary" onChange={(el) => setPuta(el.target.value)} />
                <label htmlFor="Hilary">Hilary</label>
                <p>Eligue tu raza de puta favorito</p>
                <select name="razaputa" onChange={(el) => setRaza(el.target.value)} defaultValue="negra">
                    <option value="">Sin discriminación</option>
                    <option value="negra">Negra</option>
                    <option value="blanca">Blanca</option>
                    <option value="rubia">Rubia</option>
                    <option value="mestiza">Mestiza</option>
                </select>
                <br />
                    <label htmlFor="putita">Acepto las mamadas de la putita</label>
                    <input type="checkbox" name="putita" id="putita" onChange={(el) => setPutita(el.target.checked)}/>
                <button type="submit">Enviar puta</button>
            </form>
        </>
    )
} */

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("La puta quedo llena de leche");
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <p>Elige tu puta favorita</p>
                <input type="radio" name="puta" id="Mariana" value="Mariana" defaultChecked onChange={handleChange} />
                <label htmlFor="Mariana">Mariana</label>
                <input type="radio" name="puta" id="Sofia" value="Sofia" onChange={handleChange} />
                <label htmlFor="Sofia">Sofia</label>
                <input type="radio" name="puta" id="Stefa" value="Stefa" onChange={handleChange} />
                <label htmlFor="Stefa">Stefa</label>
                <input type="radio" name="puta" id="Hilary" value="Hilary" onChange={handleChange} />
                <label htmlFor="Hilary">Hilary</label>
                <p>Eligue tu raza de puta favorito</p>
                <select name="razaputa" onChange={handleChange} defaultValue="negra">
                    <option value="">Sin discriminación</option>
                    <option value="negra">Negra</option>
                    <option value="blanca">Blanca</option>
                    <option value="rubia">Rubia</option>
                    <option value="mestiza">Mestiza</option>
                </select>
                <br />
                    <label htmlFor="putita">Acepto las mamadas de la putita</label>
                    <input type="checkbox" name="putita" id="putita" onChange={handleChecked}/>
                <button type="submit">Enviar puta</button>
            </form>
        </>
    )
}