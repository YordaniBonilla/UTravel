import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeItem (props) {
    console.log(props)
    return ( 
        <div>
         <Img
         src="https://singularityhub.com/wp-content/uploads/2018/06/autonomous-vehicles-cars-blurred-hong-kong-city-street-view-night-558632776.jpg"
         width={350}
         height={300}

         />
         //here inside the h3 tag to read javascript an expression container is needed
         //to access the passed in props we need to access the props object with the key name of the passed in value
         <h3>Country:{props.country}</h3>
         <p>Phone: {props.phone}</p>
         <p>Email: {props.email}</p>
         <p>Name: {props.name}</p>

        </div>
        );
   
}

export default HomeItem;