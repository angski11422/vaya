/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom"

export default function HotelCard({ hotel}) {
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/hotels/${hotel.id}`)
    }

    return (
        <div>
            <img src="../public/Honolulu.jpg"></img>
            <h1>{hotel.name}</h1>
        </div>
    )
}