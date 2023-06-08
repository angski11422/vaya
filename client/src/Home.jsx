import Hotels from './Hotels';
import Flights from './Flights';
import Trips from './Trips';
import { useRouteLoaderData } from "react-router-dom"



export default function Home() {
    const allInfo = useRouteLoaderData('home')

    function handleHotels(){
        return <Hotels hotels={allInfo.hotels}/>
    }
    function handleFlights(){
        <Flights flights={allInfo.flights}/>
    }
    function handleTrips(){
        <Trips trips={allInfo.trips}/>
    }

    return (
        <div>
            <button onClick={handleHotels}>Check Out Hotels</button>
            <button onClick={handleFlights}>Check Out Flights</button>
            <button onClick={handleTrips}>Check Out Trips</button>
        </div>
    )
}