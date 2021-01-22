import React from 'react';
import './Data.css';
import { theWeather, theSkyColor, theFontColor, pickbusqueda } from '../../middleware/helper';

import Daily from './Daily'




export default function Data({resultado, city}) {

    //clouds, coord, main, sys, name, dt, weather, wind 


    const { name, main, coord, weather, wind, sys, dt } = resultado;

    console.log(resultado)

    
    if(!main) return null
    
    // Calcular la temperatura Kelvin a Celsius
    const temp = parseInt((main.temp) - 273.15);
    const tempMax = parseInt((main.temp_max) - 273.15);
    const tempMin = parseInt((main.temp_min) - 273.15);

    const climaIcon = theWeather(weather);

    const skyColor =  theSkyColor(weather)

    const fontColor = theFontColor()


    // Capital Letter for weather.description
    const weatherDescription = weather[0].description;

    const capital = weatherDescription[0].toUpperCase() + weatherDescription.slice(1);


    // Converting dt to time
    let unix_timestamp = dt;

    var date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();

    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(Date.now().getDay());
    

    





    
    return (
        <div className="data-wrapper" style={{background: `${skyColor}`, color: `${fontColor}`}}>
            
            <div className="data-container">


                    <div className="temp-med">{temp}º</div>
                    <div className="name">{name}</div>
                    
                    <div className="weather-main">
                        <img className="weather-main" src={`images/icons/${climaIcon}`}/>
                    </div>

                    <div className="description">
                        <div className="main">
                            {weather[0].main} |
                        </div>
                        <div className="des">
                            {capital}
                        </div>

                    </div>
                    

                    <div className="">{tempMax}º</div>
                    <div className="">{tempMin}º</div>
                    <div className="">{sys.sunrise}</div>


            
            <Daily 
                city= {city}
                resultado={resultado}
            />

            </div>
        </div>
    )
}
