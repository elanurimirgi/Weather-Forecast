import React from 'react'
import { useContext } from './weathercontext'
import citiesinfo from './citiesinfo.json'


function Dropdown() {

    const { setCity } = useContext(WeatherContext)
    const handleChange = ((e) => {
        setCity(e.target.value)
    })
    return (
        <div>
            <h1 className='HeadText'>weather forecast </h1>

            <div className='custom-select' >
                <select onChange={handleChange}>
                    {
                        citiesinfo.map((city) =>
                            < option key={city.id} > {city.name}</option>
                        )
                    }
                </select>
                    
            </div>

        </div >
    )
}

export default Dropdown