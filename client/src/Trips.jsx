/* eslint-disable react/prop-types */
import TripCard from "./TripCard"


export default function Trips({trips}) {
  console.log(trips)
  const tripList = trips.map((trip) => {
    return <TripCard key={trip.id} trip={trip}/>
})
  return (
    <h1>{tripList}</h1>
  )
}



