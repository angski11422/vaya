import FlightCard from "./FlightCard"
import { useRouteLoaderData } from "react-router-dom"


export default function Flights() {
    const allInfo = useRouteLoaderData('flights')
    const flights = allInfo.flights
    console.log(flights)

    const flightList = flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight}/>
    })

    return (
        <>
            <div>{flightList}</div> 
        </>
    )
}