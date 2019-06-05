import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard";
import axios from "axios";

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
     const {data} = this.state
    return (
      <div>
          <header>
            <HeaderComponent />
          </header>
          { data ? 
            <div>
            {data.map(data => (
              <HomeCard
              key={data.id} 
              data={data}
              />
              ))}
            </div> :
            <h1>No Data</h1>
          }
         
      </div>
    );
  }
}
