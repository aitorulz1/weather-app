import React from 'react'
import { theWeather, theSkyColor, theFontColor, pickbusqueda, carousel } from '../../middleware/helper';

import './DailyList.css';


export default function DailyList(listi, city,  weekDayCapital) {

    const {name, main, coord, weather, wind, sys } = listi.listi;

    //console.log(listi.listi)
  

    if(!main) return null
    
    // Calcular la temperatura Kelvin a Celsius
    const temp = parseInt((main.temp) - 273.15);

    const climaIcon = theWeather(weather);

    const skyColor =  theSkyColor(weather)

    const fontColor = theFontColor()


    // Capital Letter for weather.description
    const weatherDescription = weather[0].description;

    const capital = weatherDescription[0].toUpperCase() + weatherDescription.slice(1);


    //Para pintar el día de la semana a partir de un dato que nos da listi.listi
    






    return (


        <div className="data-single-wrapper" style={{background: `${skyColor}`, color: `${fontColor}`}}>
            



                    <div className="temp-med-single">{temp}º</div>
                    <div className="name">{ weekDayCapital}</div>
                    
                    <div className="weather-main">
                        <img className="weather-main" src={`images/icons/${climaIcon}`}/>
                    </div>

                  
                        <div className="main-single">
                            {weather[0].main}
                        </div>
                        <div className="des-single">
                            {capital}
                        </div>

                        <div className="wind-container">
                            <img src='images/wind.png' />
                            <div className="windy">
                                {wind.speed}
                            </div>
                        </div>

              
                    


        </div>
                



    )
}
