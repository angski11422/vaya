import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
import RootLayout from './RootLayout'
import Hotels from './Hotels'
import Flights from './Flights'
import Trips from './Trips'
// import TripCard from './TripCard'
// import HotelCard from './HotelCard'
import HotelDetails from './HotelDetails'
import FlightDetails from './FlightDetails'
// import FlightCard from './FlightCard'
import SignIn from './SignIn'
import UserPage from './UserPage'
import EditUser from './EditUser'
import { getAll, getHotelById, getFlightById } from './utils/loaders'
import { useState } from 'react'


export default function App() {
    const [user, setUser] = useState(null)

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout user={user} setUser={setUser}/>} >
                <Route path='/' element={<Home />} loader={getAll} id='home'/>
                <Route path='/hotels' element={<Hotels /> } loader={getAll} id='hotels'/>
                <Route path='/hotels/:id' element={<HotelDetails />} loader={getHotelById} id='hotelDetail'/>
                <Route path='/flights' element={<Flights />} loader={getAll} id='flights'/>
                <Route path='/flights/:id' element={<FlightDetails />} loader={getFlightById} id='flightDetail' />
                <Route path='/trips' element={<Trips user={user}/>} loader={getAll} id='trips'/>
                {/* <Route path='/trips/:id' element={<TripCard/>}/> */}
                <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
                <Route path='/userpage' element={<UserPage user={user}/>}/>
                <Route path='/edituser' element={<EditUser user={user}/>}/>

            </Route>
        )
    )
    
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}



