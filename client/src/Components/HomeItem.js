import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeItem () {
    return ( 
        <div>
         <Img
         src="https://singularityhub.com/wp-content/uploads/2018/06/autonomous-vehicles-cars-blurred-hong-kong-city-street-view-night-558632776.jpg"
         width={350}
         height={300}

         />
         <h3>Mexico</h3>
         <p>Phone: (212) 555-4567</p>
         <p>Email: thecat@hotmail.com</p>
         <p>Twitter</p>
         <p>FaceBook</p>
        </div>
        );
   
}

export default HomeItem;