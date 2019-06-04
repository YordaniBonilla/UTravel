import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeItem"

export default class Home extends Component {
  render() {
    return (
      <div>
          <header>
            <HeaderComponent />
          </header>
          <HomeCard phone="" email="" name="" country="" image=""/>
      </div>
    );
  }
}
