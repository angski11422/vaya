/* eslint-disable react/prop-types */

export default function TripCard({trip}) {

    function formatDate(dateString) {
      const options = { month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleString('en-US', options);
    }
 
    return (
      <div>
        <h1>Hotel: {trip.hotel.name}</h1>
        <p>{trip.hotel.city}</p>
        <p>Total Price: {trip.total_price}</p>
        <p>Flight Date: {formatDate(trip.flight.departure_day)}</p>
        
      </div>
    )
  
    

  
}
