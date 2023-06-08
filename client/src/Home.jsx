import Hotels from './Hotels';
import Flights from './Flights';
import Trips from './Trips';
import { useRouteLoaderData } from "react-router-dom"



export default function Home() {
    const allInfo = useRouteLoaderData('home')
    console.log(allInfo)

    return (
        <>
            <Hotels hotels={allInfo.hotels}/>
            <Flights flights={allInfo.flights}/>
            <Trips trips={allInfo.trips}/>
        </>
    )
}