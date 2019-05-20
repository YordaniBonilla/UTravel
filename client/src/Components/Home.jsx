import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderComponent />
        </header>
        <h1>This is the Home component</h1>
      </div>
    );
  }
}
