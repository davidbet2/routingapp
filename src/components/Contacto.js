import React from 'react';
import'./Contacto.css';

const Contacto = () => {
    return (
        <form>
            <legend>Formulario de contacto</legend>
            <div className="input-field">
                <label>Nombre: </label>
                <input type="text" placeholder="Tu Nombre"></input>
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="email" placeholder="Tu Email"></input>
            </div>
            <div className="input-field">
                <label>Mensaje: </label>
                <textarea />
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    );
};

export default Contacto;