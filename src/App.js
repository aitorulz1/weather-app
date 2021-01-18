import React, { useState, useEffect} from 'react';

import Header from './components/Nav/Header';
import Form from './components/Form/Formulario';
import Data from './components/Results/Data';


function App() {

    const [ pickbusqueda, guardarPickbusqueda] = useState({
      ciudad:'',
      pais:''
    })

    const { ciudad, pais } = pickbusqueda;

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
    <div>
      <Header
        titulo="Check The Weather"
      />

      <Form 
        guardarPickbusqueda={ guardarPickbusqueda}
        guardarConsultar={guardarConsultar}
      />

      <Data
        resultado={resultado}
      />

    </div>
  );
}

export default App;
