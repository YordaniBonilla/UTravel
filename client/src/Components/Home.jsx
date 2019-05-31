import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import { MDBCol } from "mdbreact";
import Img from 'react-image';
import Image from 'react-image-resizer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header>
          <HeaderComponent />
        </header>
       
      </div>
      <div>
      Were are you going?
      <MDBCol md="6">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </MDBCol>
      </div>
      <div>
        <Img
         src="https://singularityhub.com/wp-content/uploads/2018/06/autonomous-vehicles-cars-blurred-hong-kong-city-street-view-night-558632776.jpg"
         width={350}
         height={300}

         />
      </div>
      </div>
    );
  }
}
