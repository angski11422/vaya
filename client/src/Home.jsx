/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from "react-router-dom"


export default function Home() {
    const allInfo = useRouteLoaderData('home')
    const hotels = allInfo.hotels
    const flights = allInfo.flights


    return (
        <div>
            Hello
            {/* {hotels[0]}
            {flights[0]} */}
        </div>
    )
}