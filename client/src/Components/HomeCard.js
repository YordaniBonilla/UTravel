import React from "react";
import Img from 'react-image';
import Image from 'react-image-resizer';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";

class HomeCard extends React.Component {
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

    render () {
        console.log(this.state)
     const {data} = this.state
     console.log(data)
     
    return ( 
        <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify='center'>
          {data.map(data => (
          <Grid item xs key={data.id}>
            <Card>
              <CardActionArea>
                <CardMedia 
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPmVwbUC_e4UFi3rR-5v1_E7SrNkr2cdbMi77Q7AJpg2q7sIE6Q"}
                  title="Find Your Ideal Vacation Spot!"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {data.fname}
                  </Typography>
                  <Typography component="p">Phone: {data.userphone}</Typography>
                  <Typography component="p">Email: {data.email}</Typography>
                  <Typography component="p">About: Its a home right in the heart of the city , there are many parks around and restaurant near the area.
                  <Typography component="p">Number:</Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
       ))}
      </Grid>
    </div>
        );
    }
   
}

export default HomeCard;

