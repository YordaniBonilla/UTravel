import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeCard from "../Components/HomeCard";
import Greeting from "../Components/Greeting";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { LocalAirport } from '@material-ui/icons'

export default class Home extends Component {
  
  
  
  render() {
    
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
          <div>
          <HomeCard/>
          </div>
      </div>
    );
  }
}
