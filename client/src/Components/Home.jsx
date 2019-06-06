import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard";
import axios from "axios";
import Greeting from "../Components/Greeting";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  
  getData () {
    axios.get('/home')
    .then(response => {
      this.setState({
        data: response.data
      }) 
    })
    .catch(function(err) {
      console.log(err);
    })
  };

  componentDidMount() {
    this.getData();

  }
  render() {
    console.log(this.state)
     const {data} = this.state
     const info = data.map(data => 
              <HomeCard
              key={data.id} 
              data={data}
              />
              )
    return (
      <div>
          <header>
            <HeaderComponent />
          </header>
          <div style={{padding : 50, margin: 10}}>
          {info}
          </div>
          
      </div>
    );
  }
}
