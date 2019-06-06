import React from 'react';
import Swap from '../Components/Swap';
import GuestGreeting from '../Components/GuestGreeting';


function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {

      return (<div className="App">
        <div className="Card">
          <Swap onFilesAdded={console.log} />
        </div>
      </div>)    
  }
    return <GuestGreeting />
}

export default Greeting;