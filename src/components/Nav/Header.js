import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


export default function Header({titulo, guardarMostrar, guardarConsultar}) {
    
    const mostrar = () => {
        guardarMostrar(true)
        guardarConsultar(false)
    }

    return (
    <div className="header-wrapper">
        <nav>
            <a href="#!" onClick={mostrar}>{titulo}</a>
        </nav>
    </div>
    )
}

Header.PropTypes = {
    titulo: PropTypes.string,
    guardarMostrar: PropTypes.func.isRequired
}