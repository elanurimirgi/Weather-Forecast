import React, { useEffect, useState, useContext } from 'react'
import { WeatherContext } from './WeatherContext'


function Card() {
    const { weather } = useContext(WeatherContext)
    const [day, setday] = useState()
    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    useEffect(() => {
       
        setday(daysOfWeek)
    }, [weather])
    
    const icon_src = `http://openweathermap.org/img/w/`


    return (
        <div className='Card'>
            
            <>{weather &&

                weather.map((item, id) =>
                    item.weather.map((weatitem) =>

                        <div key={weatitem.id}>
                            <h1> {day[id]}</h1>
                            <img src={icon_src + weatitem.icon + ".png"} alt={icon_src} />
                            <br></br>
                            <h3>{weatitem.description}</h3>
                            <h3>{item.main.temp_min} °C {item.main.temp_max} °C</h3>
                        </div>
                    ))
            }
            </>
             
        </div>
    )
}

export default Card