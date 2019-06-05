import React from 'react';
import Swap from './Components/Swap';
import GuestGreeting from './Components/GuestGreeting';

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return <Swap/>
    }
    return <GuestGreeting />
}

export default Greeting;