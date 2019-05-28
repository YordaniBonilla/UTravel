import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      aboutme: "",
      password: "",
      number: "",
      age: "",
      country: "",
      users: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

  };


  //post method
     addCommentPost = (fname) => {
     $.ajax({
       method: "POST",
       url: "/potatoe",
       contentType: 'application/json',
       data: JSON.stringify({
         fname: fname
       })
    }).done(() => {
       this.setState({fname: ""})
     });
   }
  
   //onsubmit
  onSubmit = (e) => {
    e.preventDefault();
    const { fname } = this.state;
    addCommentPost(fname);
  };
  
  componentDidMount() {
    //this.doGet();
  }
     
  render() {
    const {
      fname,
      lname,
      email,
      aboutme,
      password,
      number,
      age,
      country
    } = this.state;
    console.log(fname);
    console.log(lname);
    console.log(aboutme);
    console.log(password);
    console.log(number);
    return (
      <form autoComplete="on" className="block" onSubmit={this.onSubmit}>
        <div style={{color:"red"}}>
          <label>First Name</label>
          <input
            id="first-name"
            type="text"
            name="fname"
            value={fname}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Last Name</label>
          <input
            id="last-name"
            type="text"
            name="lname"
            value={lname}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color: "red"}}>
          <label>About Me:</label>
          <input
            id="about-me"
            type="text"
            name="aboutme"
            maxLength="500"
            value={aboutme}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Password</label>
          <input
            id="password"
            type="text"
            maxLength="10"
            name="password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Number</label>
          <input
            id="number"
            type="number"
            name="number"
            value={number}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Age</label>
          <input
            id="age"
            type="number"
            name="age"
            value={age}
            onChange={this.onChange}
          />
        </div>
        <div  style={{color:"red"}}>
          <label>Country</label>
          <input
            id="country"
            type="text"
            name="country"
            value={country}
            onChange={this.onChange}
          />
        </div>
        <button type="submit" onClick={this.onSubmit}>Submit</button>
        
      </form>
    );
  }
}

export default Register;
