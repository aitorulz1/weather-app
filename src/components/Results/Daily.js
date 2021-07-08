import React, { useEffect, useState } from 'react';

import DailyList from './DailyList';
import './Daily.css';


import ItemsCarousel from 'react-items-carousel';




// Carousel




export default function Daily(city) {
    
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [ listado, guardarListado ] = useState([]);

    const list = listado.list;



    useEffect(() => {

        const consultarApiMulti = async() => {
            const ApiKey = 'da911c5da8ac8830a326fa164a4cd030';
            const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city.city}&appid=${ApiKey}`;
            const respuesta = await fetch(url);
            const resultadoDaily = await respuesta.json();

            guardarListado(resultadoDaily)
        }
        consultarApiMulti();
    }, [city])

 
    return (
    <div>
        <div className="CategoriesContainer" >
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                leftChevron={<button className="arrow" >{'<'}</button>}
                rightChevron={<button className="arrow" >{'>'}</button>}
                outsideChevron
                chevronWidth={40}
                slidesToScroll={5}
            >
            {!list ? null : list.map((listi) => (
                <DailyList
                    key={listi.id}
                    listi={listi}
                />
            ))}
            </ItemsCarousel>
        </div>
    </div>
    )
}
