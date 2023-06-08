import Home from './Home'
import RootLayout from './RootLayout'
import SignIn from './SignIn'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path='/signin' element={<SignIn />}/>
        </Route>
    )
)

export default function App() {
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}



