/* eslint-disable react/prop-types */


export default function FlightCard({flight}) {
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