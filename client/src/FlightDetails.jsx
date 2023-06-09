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
            <div>
                <h1>To: {flight.arrival_city}</h1>
                <h1>From: {flight.departure_city}</h1>
                <h3>Leaving on: {formatDate(flight.departure_day)}</h3>
                <h4>${flight.price}</h4>
            </div>
    )
}