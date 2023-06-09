/* eslint-disable react/prop-types */
import TripCard from "./TripCard"
import { useRouteLoaderData } from "react-router-dom"


export default function Trips() {
  const allInfo = useRouteLoaderData('trips')
  const trips = allInfo.trips
  console.log(trips)

  const tripList = trips.map((trip) => {
    return <TripCard key={trip.id} trip={trip}/>
})
  return (
    <h1>{tripList}</h1>
  )
}



