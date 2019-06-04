import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard"

export default class Home extends Component {
  render() {
    return (
      <div>
          <header>
            <HeaderComponent />
          </header>
          {/*//the first {} is to get into javascript and the {}2 one is our object*/}
          <HomeCard userInfo = {{phone: "253-341-4432", email: "b.yordani93@gmail.com", name:"Paul", country:"Cambodia", imageUrl: "https://singularityhub.com/wp-content/uploads/2018/06/autonomous-vehicles-cars-blurred-hong-kong-city-street-view-night-558632776.jpg"}}/>
      </div>
    );
  }
}
