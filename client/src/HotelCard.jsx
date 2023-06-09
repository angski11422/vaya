/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom"

export default function HotelCard({ hotel}) {
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/hotels/${hotel.id}`)
    }

    return (
        <div onClick={handleClick}>
            <img src={hotel.image}></img>
            <h1>{hotel.name}</h1>
        </div>
    )
}