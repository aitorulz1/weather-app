import React from 'react';
import './Data.css';
import { theWeather, theSkyColor } from '../../middleware/helper';




export default function Data({resultado}) {

    //clouds, coord, main, sys, name, dt, weather, wind 

    const { name, main, coord, weather, wind, sys } = resultado;


    
    if(!main) return null
    
    // Calcular la temperatura Kelvin a Celsius
    const temp = parseInt((main.temp) - 273.15);

    const climaIcon = theWeather(weather);

    const skyColor =  theSkyColor(weather)



    console.log(resultado)





    
    return (
        <div className="data-wrapper" style={{background: `${skyColor}`}}>
            
            <div className="data-container">


                    <div className="temp-med">{temp}º</div>
                    <div className="name">{name}</div>
                    
                    <div className="weather-main">
                        <img className="weather-main" src={`images/icons/${climaIcon}`}/>
                    </div>
                    
                    <div className="">{coord.lat}, {coord.lon}</div>
                    <div className="">{weather[0].description},{weather[0].main}</div>
                    <div className="">{wind.speed},  {wind.deg}</div>
                    <div className="">{sys.sunrise}</div>


            </div>

        </div>
    )
}
