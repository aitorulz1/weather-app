import React from 'react'
import { theWeather, theSkyColor, theFontColor, pickbusqueda } from '../../middleware/helper';


export default function DailyList(listi) {

    const {main, coord, weather, wind, sys } = listi.listi;

    console.log(listi.listi)

    if(!main) return null




    return (


        <div>             
                
            <div className="description">
                    
                <div className="main">
                
                    {weather[0].main}
                
                </div>

            </div>

        </div>
                



    )
}
