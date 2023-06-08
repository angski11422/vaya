import FlightCard from "./FlightCard"
import { useState, useEffect } from "react"


export default function Flights() {

    const [flightData, setFlightData] = useState([])

    useEffect(() => {
        fetch('/api/flights')
        .then((res) => res.json())
        .then((data) => setFlightData(data))
    }, [])

    const flightList = flightData.map((flight) => {
        return <FlightCard key={flight.id} flight={flight}/>
    })

    return (
        <>
            <div>{flightList}</div> 
        </>
    )
}