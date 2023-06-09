/* eslint-disable react/prop-types */
import { useRouteLoaderData } from "react-router-dom"


export default function FlightCard() {
    const flight = useRouteLoaderData('flightDetail')

    function formatDate(dateString) {
        const options = { month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
      }

    return (
        <>
            <h1>{flight.departure_city}</h1>
            <h3>{formatDate(flight.departure_day)}</h3>
            <h4>${flight.price}</h4>
        </>

    )
}