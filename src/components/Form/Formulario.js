import React, { useState } from 'react'

export default function Formulario({guardarPickbusqueda, guardarConsultar}) {

    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    })
  
      const { ciudad, pais } = busqueda;

    const [ error, guardarError ] = useState(false);

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        if( ciudad.trim() === '' || pais.trim() === '') {
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


    }

    return (
        <form
            onSubmit = {onSubmit}
        >

            { error ? <p className="">'Debes de insertar ambos valores'</p> : null }

            <label>Ciudad: </label>
            <input 
                type="text"
                placeholder="ciudad"
                name='ciudad'
                id='ciudad'
                value= {ciudad}
                onChange={handleChange}
            />


            <label>País: </label>
            <select
                name='pais'
                id='pais'
                value={pais}
                onChange={handleChange}
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

            <input 
                type='submit'
                value='Buscar'
            />
            
        </form>
    )
}
