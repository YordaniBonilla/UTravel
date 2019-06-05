import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeCard (props) {
    console.log("this",props)
    return ( 
<div>
<Img src="https://www.classicvacations.com/sites/default/files/main-hawaii-pool_0.jpg" width={200} height={200}/>
<h4>{props.data.userlocation}</h4>
<h4>{props.data.fname}</h4>
<h4>{props.data.userphone}</h4>
<h4>{props.data.email}</h4>
<hr/>

</div>
        );
   
}

export default HomeCard;