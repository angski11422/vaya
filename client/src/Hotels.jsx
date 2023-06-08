import{ useState, useEffect } from 'react';
import HotelCard from './HotelCard';



export default function Hotels({test}) {
console.log(test)
const [hotelData, setHotelData] = useState([])

    useEffect(() => {
        fetch('/api/hotels')
        .then((res) => res.json())
        .then((data) => setHotelData(data))
    }, [])

    const hotelList = hotelData.map((hotel) => {
        return <HotelCard key={hotel.id} hotel={hotel}/>
    })

    return (
        <>
         <div>{[hotelList]}</div>
        </>
    )
}