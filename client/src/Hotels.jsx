/* eslint-disable react/prop-types */

import HotelCard from './HotelCard';



export default function Hotels(hotels) {
    
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