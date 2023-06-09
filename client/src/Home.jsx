import Hotels from './Hotels';
import Flights from './Flights';
import Trips from './Trips';
import { useRouteLoaderData } from "react-router-dom"



export default function Home() {
    const allInfo = useRouteLoaderData('home')



    return (
        <div>
            <Hotels hotels={allInfo.hotels}/>
            <Flights flights={allInfo.flights}/>
            <Trips trips={allInfo.trips}/>
        </div>
    )
}