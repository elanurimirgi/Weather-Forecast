import axios from "axios";
import { createContext, useEffect, useState } from "react";


const WeatherContext = createContext()

export const Weathercontext = ({children}) => {
    const [city, setCity] = useState("İstanbul")
    const [weather, setWeather] = useState()
    
    useEffect(() => {
        const key = "e08f0a0055a119fc166b58d4b59aa049"
       axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${key}`)
        .then(res => setWeather(res.data.list))
        
    },[city])
    
    
    const values = {city, setCity, weather, setWeather }


    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}
export {WeatherContext}