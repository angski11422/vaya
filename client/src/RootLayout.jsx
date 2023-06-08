import Header from './Header'
import Nav from './Nav'
import {Outlet} from 'react-router-dom'

export default function RootLayout() {
    return (
    <>
        <div>
            <Header />
            <Nav />
        </div>
        <div>
            <Outlet />
        </div>
    </>
)
}