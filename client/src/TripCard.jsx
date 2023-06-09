/* eslint-disable react/prop-types */

export default function TripCard({trip, user}) {
  if (user.id == trip.user_id){
    return (
      <div>
        <p>{trip.total_price}</p>
        
      </div>
    )
  } else return <h1>You have no current trips!</h1>
    

  
}
