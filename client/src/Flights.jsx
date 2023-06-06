import React, { useState, useEffect } from 'react';
import FlightCard from './FlightCard';


export default function Flights() {

    const [flightData, setFlightData] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/flights')
        .then((res) => res.json())
        .then((data) => setFlightData(data))
    }, [])

    const flightList = flightData.map((flight) => {
        return <FlightCard key={flight.id} flight={flight}/>
    })

    return (
        <>
         <div>{[flightList]}</div>
        </>
    )
}