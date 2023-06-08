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
import { getAll } from './utils/loaders'
// import { useParams } from 'react-router-dom'


export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />} >
                <Route path='/' element={<Home />} loader={getAll} id='home'>
                    <Route path='/hotels' element={<Hotels /> }>
                        <Route path="/hotels/:id" element={<HotelCard/>}/>
                    </Route>
                    <Route path='/flights' element={<Flights />}>
                        <Route path='/flights/:id' element={<FlightCard />}/>
                    </Route>
                    <Route path='/trips' element={<Trips />}>
                        <Route path='/trips/:id' element={<TripCard/>}/>
                    </Route>
                </Route>
            </Route>
        )
    )
    
    return(
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    )
}



