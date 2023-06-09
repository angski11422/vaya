// import {useEffect, useState} from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
import RootLayout from './RootLayout'
import Hotels from './Hotels'
import Flights from './Flights'
import Trips from './Trips'
import TripCard from './TripCard'
import HotelCard from './HotelCard'
import FlightCard from './FlightCard'
import SignIn from './SignIn'
import { getAll } from './utils/loaders'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'


export default function App() {
    const [user, setUser] = useState(null)

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout user={user} setUser={setUser}/>} >
                <Route path='/' element={<Home />} loader={getAll} id='home'/>
                <Route path='/hotels' element={<Hotels /> } loader={getAll} id='hotels'>
                    <Route path="/hotels/:id" element={<HotelCard/>}/>
                </Route>
                <Route path='/flights' element={<Flights />} loader={getAll} id='flights'>
                    <Route path='/flights/:id' element={<FlightCard />}/>
                </Route>
                <Route path='/trips' element={<Trips />} loader={getAll} id='trips'>
                    <Route path='/trips/:id' element={<TripCard/>}/>
                </Route>
                <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
            </Route>
        )
    )
    
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}



