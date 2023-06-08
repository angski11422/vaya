import Header from './Header'
import Nav from './Nav'
import {Outlet} from 'react-router-dom'

export default function RootLayout() {
    return (
    <div className="container">
        <div>
            <Header />
        </div>
        <div className="content">
            <Nav />
            <div className="content_page">
            <Outlet />
            </div>
        </div>
        
    </div>
)
}