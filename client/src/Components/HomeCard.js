import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';

function HomeCard ({ fname, lname}) {
    return ( 
        <div>
         {/* <img src={props.userInfo.imageUrl} height={300} width={350}/> */}
         {/*here inside the h3 tag to read javascript an expression container is needed*/}
         {/*to access the passed in props we need to access the props object with the key name of the passed in value*/}
         {/* <h3>Country:{props.userInfo.country}</h3>
         <p>Phone: {props.userInfo.phone}</p> */}
         {/* <p>Email: {props.userInfo.email}</p> */}
         <p>First Name: {`${fname}`}</p>
         <p>Last Name: {`${lname}`}</p>
         <hr/>
        </div>
        );
   
}

export default HomeCard;



const GroceryItem = ({ item, quantity }) => <p>{`${item} ${quantity}`}</p>;

