/* eslint-disable react/prop-types */

import HotelCard from './HotelCard';
import { useRouteLoaderData } from "react-router-dom"




export default function Hotels() {
    const allInfo = useRouteLoaderData('hotels')
    const hotels = allInfo.hotels
    console.log(hotels)
    
// const [hotelData, setHotelData] = useState([])

    const hotelList = hotels.map((hotel) => {
        return <HotelCard key={hotel.id} hotel={hotel}/>
    })

    return (
        <>
         <div>{[hotelList]}</div>
        </>
    )
}