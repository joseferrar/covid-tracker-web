import React from 'react'
import { useLocation } from "react-router-dom";
import CountryTable from './CountryTable';
function CountryList() {
    const locations = useLocation()
    // console.log(locations)
    const data = locations.state.item
    return (
        <div>
           <CountryTable data={data}/>
        </div>
    )
}

export default CountryList
