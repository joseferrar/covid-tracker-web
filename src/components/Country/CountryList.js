import React from 'react'
import { useLocation } from "react-router-dom";
function CountryList() {
    const locations = useLocation()
    console.log(locations)
    const data = locations.state.item
    return (
        <div>
            CountryList
            <h1>{data.title}</h1>
        </div>
    )
}

export default CountryList
