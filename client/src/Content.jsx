import React from 'react';
import SignIn from './SignIn';
import UserPage from './UserPage';
import Home from './Home';
import Hotels from './Hotels';
import Flights from './Flights';




export default function Content() {
    return (
        <>
            <main className="homepage">
                <UserPage />
                <Home />
                <Hotels />
                <Flights/>
            </main>
        </>
    )


}