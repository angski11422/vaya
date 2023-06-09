/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from "react-router-dom"


export default function Home() {
    const allInfo = useRouteLoaderData('home')
    const hotels = allInfo.hotels
    const flights = allInfo.flights

    function formatDate(dateString) {
        const options = { month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
      }

    const hotelList = hotels.slice(0,2)
    const hotelInfo = hotelList.map((hotel) => {
        return (<div key={hotel.id}>
            <img className='photos' src={hotel.image}></img>
            <p>{hotel.name}</p>
            <p>{hotel.city}</p>
            <p>${hotel.price}</p>
            </div>)
    })

    const flightList = flights.slice(2,4)
    const flightInfo = flightList.map((flight) => {
        return (<div className="flight" key={flight.id}>
            <h4>Flight</h4>
            <p>To: {flight.arrival_city}</p>
            <p>From: {flight.departure_city}</p>
            <p>Leaving on: {formatDate(flight.departure_day)}</p>
            <p>${flight.price}</p>
            </div>)
    })
   

    return (
        <div className="home-container">
            <div className="hotel-container">
                {hotelInfo}
            </div>
            <div className="flight-container">
                {flightInfo}
            </div> 
        </div>
    )
}