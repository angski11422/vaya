import Home from './Home'
import RootLayout from './RootLayout'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}/>
        </Route>
    )
)

export default function App() {
    return(
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    )
}



