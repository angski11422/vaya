/* eslint-disable react/prop-types */


export default function HotelCard({ hotel}) {

    return (
        <div>
            <img src="../public/Honolulu.jpg"></img>
            <h1>{hotel.name}</h1>
        </div>
    )
}