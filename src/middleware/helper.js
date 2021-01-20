
// Find is day or night

function isDay() {
    return (Date.now() + 60000 * new Date().getTimezoneOffset() + 21600000) % 86400000 / 3600000 > 12;
}


// Weather Icon

export const theWeather = (weather) => {
    
    const clima = weather[0].main;

    let wIcon

    if (clima === 'Clear' && isDay) {
        wIcon = '01d.png'
    } if  (clima === 'Clear' && isDay === false) {
        wIcon = '01n.png'
    } if (clima === 'Clouds' && isDay) {
        wIcon = '02d.png'
    } if  (clima === 'Clouds' && isDay === false) {
        wIcon = '02n.png'
    } if (clima === 'Scattered Clouds' && isDay) {
        wIcon = '03d.png'
    } if  (clima === 'Scattered Clouds' && isDay === false) {
        wIcon = '03n.png'
    } if (clima === 'Broken Clouds' && isDay) {
        wIcon = '04d.png'
    } if  (clima === 'Broken Clouds' && isDay === false) {
        wIcon = '04n.png'
    } if (clima === 'Drizzle' && isDay) {
        wIcon = '09d.png'
    } if  (clima === 'Drizzle' && isDay === false) {
        wIcon = '09n.png'
    } if (clima === 'Rain' && isDay) {
        wIcon = '10d.png'
    } if  (clima === 'Rain' && isDay === false) {
        wIcon = '10n.png'
    } if (clima === 'Thunderstorm' && isDay) {
        wIcon = '11d.png'
    } if  (clima === 'Thunderstorm' && isDay === false) {
        wIcon = '11n.png'
    } if (clima === 'Snow' && isDay) {
        wIcon = '13d.png'
    } if  (clima === 'Snow' && isDay === false) {
        wIcon = '13n.png'
    } if (clima === 'Mist' && isDay) {
        wIcon = '50d.png'
    } if  (clima === 'Mist' && isDay === false) {
        wIcon = '50n.png'
    }

    return wIcon;

}

// Background color

export const theSkyColor = (weather) => {
    
    const clima = weather[0].main;

    let sColor

    if (clima === 'Clear' && isDay) {
        sColor = '#9fddff'
    } if  (clima === 'Clear' && isDay === false) {
        sColor = '#00283e'
    } if (clima === 'Clouds' && isDay) {
        sColor = '#'
    } if  (clima === 'Clouds' && isDay === false) {
        sColor = '#'
    } if (clima === 'Scattered Clouds' && isDay) {
        sColor = '#'
    } if  (clima === 'Scattered Clouds' && isDay === false) {
        sColor = '#'
    } if (clima === 'Broken Clouds' && isDay) {
        sColor = '#'
    } if  (clima === 'Broken Clouds' && isDay === false) {
        sColor = '#'
    } if (clima === 'Drizzle' && isDay) {
        sColor = '#'
    } if  (clima === 'Drizzle' && isDay === false) {
        sColor = '#'
    } if (clima === 'Rain' && isDay) {
        sColor = '#'
    } if  (clima === 'Rain' && isDay === false) {
        sColor = '#'
    } if (clima === 'Thunderstorm' && isDay) {
        sColor = '#'
    } if  (clima === 'Thunderstorm' && isDay === false) {
        sColor = '#'
    } if (clima === 'Snow' && isDay) {
        sColor = '#'
    } if  (clima === 'Snow' && isDay === false) {
        sColor = '#'
    } if (clima === 'Mist' && isDay) {
        sColor = '#'
    } if  (clima === 'Mist' && isDay === false) {
        sColor = '#'
    }

    return sColor;

}


