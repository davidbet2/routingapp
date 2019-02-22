import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    render() {
        return (
            <div>
                <div className="contenedor-nosotros">
                    <div className="imagen">
                        <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                    </div>
                    <div className="contenido">
                        <h2>Sobre Nosotros</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste ea sit perferendis, reprehenderit pariatur molestiae atque, repellendus alias voluptatum a, fugit distinctio. Eaque sapiente facilis aliquam? Id, ipsam quibusdam!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nosotros;