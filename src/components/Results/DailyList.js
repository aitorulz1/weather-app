import React, { Fragment } from 'react'
import { theWeather, theSkyColor, theFontColor, pickbusqueda, theWeekDay } from '../../middleware/helper';

import './DailyList.css';


export default function DailyList(listi, city  ) {

    const {name, main, coord, weather, wind, sys, dt_txt } = listi.listi;
   

    if(!main) return null
    
    // Calcular la temperatura Kelvin a Celsius
    const temp = parseInt((main.temp) - 273.15);

    const climaIcon = theWeather(weather);

    const skyColor =  theSkyColor(weather)

    const fontColor = theFontColor()


    // Capital Letter for weather.description
    const weatherDescription = weather[0].description;

    const capital = weatherDescription[0].toUpperCase() + weatherDescription.slice(1);


    
    // Obtener día de la semana

    const weekDay =theWeekDay();

    const weekDayCapital = weekDay[0].toUpperCase() + weekDay.slice(1);


    // Date

    const date = dt_txt.slice(0, 10);

    


    var dia = date.slice(8, 11);
    var mes = date.slice(5, 7);
    var anio = date.slice(0, 4);

    var timeDay = dt_txt.slice(11, 16)

    // Obtengo hora entera '12:00:00'
    var timeDayFull = dt_txt.slice(11, 19)

    var dias=["mie", "jue", "vie", "sab", "dom", "lun", "mar", "mie"];
    var dt = new Date(mes+' '+dia+', '+anio);

    // Obtengo el día de la seman (lunes, martes, miercoles,...)
    const dayOfWeek = dias[dt.getUTCDay()-1];



    return (

             
            
                <div className="data-single-wrapper" style={{background: `${skyColor}`, color: `${fontColor}`, width:192}}>

                    <div className="temp-med-single">{temp}º</div>
                    <div className="name-day">{dayOfWeek} | {dia}</div>
                    <div className="time-day">{timeDay}</div>
                            
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
