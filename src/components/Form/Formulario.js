import React, { useState } from 'react';
import './Formulario.css';
import logo from '../../assets/images/logo.png';
import PropTypes from 'prop-types';

export default function Formulario({ guardarPickbusqueda, guardarConsultar, guardarMostrar }) {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const { ciudad, pais } = busqueda;

    const [error, guardarError] = useState(false);

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarConsultar(true);
        guardarPickbusqueda(busqueda);

        guardarBusqueda({
            ciudad: '',
            pais: ''
        })

        guardarMostrar(false);
    }

    return (

        <div className="form-background">

            <form className="login"
                onSubmit={onSubmit}
            >

                <div className="form-container">

                    <div className="logo">
                        <img src={logo} />
                    </div>

                    {error ? <p className="danger">'Debes de insertar ambos valores'</p> : null}

                    <div className="log-form-group">

                        <label>País: </label>
                        <select
                            name='pais'
                            id='pais'
                            value={pais}
                            onChange={handleChange}
                            className='weather'
                        >
                            <option value="">-- Seleccione un País --</option>
                            <option value="US">Estados Unidos</option>
                            <option value="MX">México</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">España</option>
                            <option value="PE">Perú</option>
                        </select>

                    </div>

                    <div className="log-form-group">

                        <label>Ciudad: </label>
                        <input
                            type="text"
                            placeholder="ciudad"
                            className='weather'
                            name='ciudad'
                            id='ciudad'
                            value={ciudad}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="log-form-group">

                        <input
                            type='submit'
                            value='Buscar'
                            className='login-button'
                        />
                    </div>

                </div>

            </form>

        </div>

    )
}

Formulario.PropTypes = {
    guardarPickbusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired,
    guardarMostrar: PropTypes.func.isRequired,
}