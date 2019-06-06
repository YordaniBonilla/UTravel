import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard";
import axios from "axios";
import Greeting from "../Components/Greeting";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { LocalAirport } from '@material-ui/icons'

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
          <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            > <LocalAirport />
              
           </TypoGraphy>
           <TypoGraphy variant="title"
              color="inherit"
            > 
              <HeaderComponent/>
           </TypoGraphy>
          </Toolbar>
          </AppBar>
          <div style={{padding : 50, margin: 10}}>
          {info}
          </div>
      </div>
    );
  }
}
