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
        <div style={{ marginTop: 10, padding: 10 }}>
      <Grid container  justify="flex-start">
          {data.map(data => (
          <Grid container item xs={8} spacing={8} key={data.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="150"
                  style={{width: 280}}
                  image={"https://www.thenational.ae/image/policy:1.842142:1553712143/928308426.jpg?f=16x9&w=1200&$p$f$w=ffc3ab3"}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {data.fname}
                  </Typography>
                  <Typography component="p">Phone: {data.userphone}</Typography>
                  <Typography component="p">Email: {data.email}</Typography>
                  <Typography style={{width: 250}}component="p">About: Its a home right in the heart of the city , there are many parks around and restaurant near the area.
                  Lots of tourism and eyah hahahahah ah ah ah a aljadsf lasdjf l;asdjf l;asdjkf l;asdjf l;jksdf l;asdj flajsd;
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

