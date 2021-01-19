import React, { useState, useEffect} from 'react';
import { BrowserRouter as  Switch, Route, Link } from 'react-router-dom';

import Header from './components/Nav/Header';
import Form from './components/Form/Formulario';
import Data from './components/Results/Data';


function App() {

    const [ pickbusqueda, guardarPickbusqueda] = useState({
      ciudad:'',
      pais:''
    })

    const { ciudad, pais } = pickbusqueda;

    const [ mostrar, guardarMostrar ] = useState(true);

    const [ consultar, guardarConsultar ] = useState(false);

    const [ resultado, guardarResultado ] = useState({});

  useEffect(() => {
    const consultarApi = async() => {

      if(consultar) {

        const ApiKey = 'da911c5da8ac8830a326fa164a4cd030';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${ApiKey}`; 
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        guardarResultado(resultado);

      }

    }
    consultarApi();
  }, [consultar])

  return (
    <div className="wrapper">

      <Header
        titulo={!consultar ? "Check The Weather" : 'Back to Search'}
        guardarMostrar={guardarMostrar}
        guardarConsultar={guardarConsultar}
      />

    {mostrar ?
      <Form 
        guardarPickbusqueda={ guardarPickbusqueda}
        guardarConsultar={guardarConsultar}
        guardarMostrar= {guardarMostrar}
      />
      :
      <Data
        resultado={resultado}
      />
    }
    </div>
  );
}

export default App;
