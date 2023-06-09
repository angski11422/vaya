/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom"


export default function FlightCard({flight}) {
    const navigate = useNavigate()

        function handleClick(){
        navigate(`/flights/${flight.id}`)
    }

    function formatDate(dateString) {
        const options = { month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
      }

    return (
        <>
            <div onClick={handleClick}>
                <h1>{flight.departure_city}</h1>
                <h3>{formatDate(flight.departure_day)}</h3>
                <h4>${flight.price}</h4>
            </div>
        </>

    )
}