/* eslint-disable react/prop-types */


export default function HotelCard({ hotel}) {

    return (
        <div>
            <img src={hotel.image} alt={hotel.name}/>
            <h1>{hotel.name}</h1>
        </div>
    )
}