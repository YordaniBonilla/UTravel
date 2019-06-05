import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeCard (props) {
    console.log("this",props)
    return ( 
<div>
<h4>{props.data.fname}</h4>
</div>
        );
   
}

export default HomeCard;