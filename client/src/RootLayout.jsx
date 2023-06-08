/* eslint-disable react/prop-types */
import Header from './Header'
import Nav from './Nav'
import {Outlet} from 'react-router-dom'

export default function RootLayout({user, setUser}) {
    
    return (
    <div className="container">
        <div>
            <Header user={user} setUser={setUser}/>
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