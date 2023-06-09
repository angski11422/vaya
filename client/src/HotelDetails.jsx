/* eslint-disable react/prop-types */
import { useRouteLoaderData } from "react-router-dom"

export default function HotelDetails() {
    const hotel = useRouteLoaderData('hotelDetail')
    console.log(hotel.image)

    return (
        <div >
            <img className='photos' src={hotel.image}></img>
            <h1>{hotel.name}</h1>
            <h2>{hotel.city}</h2>
            <p>${hotel.price}</p>
        </div>
    )
}