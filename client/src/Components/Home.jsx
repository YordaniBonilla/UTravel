import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeItem from "../Components/HomeItem"

export default class Home extends Component {
  render() {
    return (
      <div>
          <header>
            <HeaderComponent />
          </header>
          <HomeItem phone="" email="" name="" country="" image=""/>
      </div>
    );
  }
}
