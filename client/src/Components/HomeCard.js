import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeCard (props) {
    console.log(props)
    return ( 
        <div>
         <img src={props.userInfo.imageUrl}/>
         {/*here inside the h3 tag to read javascript an expression container is needed*/}
         {/*to access the passed in props we need to access the props object with the key name of the passed in value*/}
         <h3>Country:{props.userInfo.country}</h3>
         <p>Phone: {props.userInfo.phone}</p>
         <p>Email: {props.userInfo.email}</p>
         <p>Name: {props.userInfo.name}</p>

        </div>
        );
   
}

export default HomeCard;