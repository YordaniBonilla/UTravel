import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
  
  getData () {
    axios.get('/home')
    .then(response => {
      this.setState({
        data: response.data
      }) 
      // console.log("this is the state",this.state.data)
    })
    .catch(function(err) {
      // console.log(err);
    })
  };

  componentDidMount() {
    this.getData();
  }
  render() {
     const { data } = this.state
     console.log(data)

    return (
      <div>
        <header>
          <HeaderComponent />
        </header>
          {
            this.state.data.length > 0 ?
              <div>
                {data.map(data => (
                 <HomeCard
                 key={data.id}
                 fname={data.fname}
                 lname={data.lname}
                 />
                 ))}
              </div> :
              <h1>no items</h1> 

           }
          {/* <HomeCard userInfo = {{phone: "253-341-4432", email: "b.yordani93@gmail.com", name:"Paul", country:"Cambodia", imageUrl: "https://singularityhub.com/wp-content/uploads/2018/06/autonomous-vehicles-cars-blurred-hong-kong-city-street-view-night-558632776.jpg"}}/>
          <HomeCard userInfo = {{phone: "253-341-4432", email: "b.yordani93@gmail.com", name:"Paul", country:"Cambodia", imageUrl: "https://cdn-3.expansion.mx/dims4/default/d1fe8e1/2147483647/strip/true/crop/1262x831+0+0/resize/800x527!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F44%2F24%2Feabb1af844068c92301ac513d133%2Fistock-860594926.jpg"}}/>
          <HomeCard userInfo = {{phone: "253-341-4432", email: "b.yordani93@gmail.com", name:"Paul", country:"Cambodia", imageUrl: "https://www.contentedtraveller.com/wp-content/uploads/2016/04/dubai-Top-9-Things-to-do-in-Old-Dubaig.jpg"}}/>
          <HomeCard userInfo = {{phone: "253-341-4432", email: "b.yordani93@gmail.com", name:"Paul", country:"Cambodia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Buddhist_monks_in_front_of_the_Angkor_Wat.jpg/600px-Buddhist_monks_in_front_of_the_Angkor_Wat.jpg"}}/>       */}
      </div>
    );
  }
}
