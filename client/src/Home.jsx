import Hotels from './Hotels';
import Flights from './Flights';
import {useState} from 'react';


export default function Home() {

    const [test,setTest] = useState("Test")

    return (
        <div>
        
            <Hotels test = {test}/>
            <Flights/>
        </div>
    )
}