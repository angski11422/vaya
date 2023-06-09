/* eslint-disable react/prop-types */
import { useRouteLoaderData } from "react-router-dom"

export default function HotelDetails() {
    const hotel = useRouteLoaderData('hotelDetail')
    console.log(hotel)

    return (
        <div >
            <img src="../public/Honolulu.jpg"></img>
            <h1>{hotel.name}</h1>
        </div>
    )
}