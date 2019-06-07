import React, { Component } from "react";
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
class  Login extends Component {
    constructor ()  {
        super();
        this.state = {
            email : "",
            password : ""
        }

    }

    getData () {
    axios.get('/Login')
    .then((response) => {
    // handle success
      console.log(response)
      this.setState({
        email: response.data["0"].email,
        password: response.data["0"].userpassword
      });
    console.log(this.state);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    }

    onSubmit = () => {
    this.getData();
    }

    render () {
      return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Login</h1>

          <FormControl margin="normal" >
            <InputLabel htmlFor="name">Email</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" >
            <InputLabel htmlFor="email">Password</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

    

          <Button variant="contained" color="primary" size="medium" type="submit" onClick={this.onSubmit}>
            Enter
          </Button>
        </form>
      </div>
        );
    }
    
    
}

export default Login;

 
      
    