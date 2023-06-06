import React from 'react';
import { useState, useEffect } from 'react';
import HotelCard from './HotelCard';


export default function Hotels() {

const [hotelData, setHotelData] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/hotels')
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