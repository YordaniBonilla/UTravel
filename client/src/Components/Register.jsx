import React, { Component } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      email: "",
      userpassword: ""
    };
  }

  handleChange = (event) => {
  this.setState({
            [event.target.name]: event.target.value
       });
}
 
  onSubmit = e => {
    e.preventDefault();
    const user = {
      fname: this.state.fname.toLowerCase(),
      email: this.state.email.toLowerCase(),
      userpassword: this.state.userpassword
    };
     axios.post("/Users", { user })
      .then(response => {
    
      }).catch(error => {
        console.log(error);
      });

      this.setState({
      fname: "",
      email: "",
      userpassword: ""
    });
    };
    

  render() {
    const {
      fname,
      email,
      userpassword
    } = this.state;

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
        <h1>Register Form</h1>
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input required
            id="first-name"
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}/>
          </FormControl>
      
        <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input required
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
          </FormControl>
        
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">password</InputLabel>
            <Input  required
            id="password"
            type="password"
            maxLength="10"
            name="userpassword"
            value={this.state.userpassword}
            onChange={this.handleChange}/>
          </FormControl>
        
      <Button variant="contained" color="primary" size="medium" type="submit" onClick={this.onSubmit}  value="Submit" >
            Send
          </Button>
 
      </form>
      </div>
    );
  }
}

export default Register;

        
          

         

          

         

          
       
     