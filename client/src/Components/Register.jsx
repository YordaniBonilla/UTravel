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

  postData = (url = '', data = {}) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => this.getData(url))
      .catch(err => console.error(err));
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { fname } = this.state;

      this.postData('/Users', {
      fname: fname.toLowerCase(),
      // quantity,
    });

    this.setState({
      fname: '',
      //quantity: 0,
    });
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
      <form autoComplete="on" className="block">
        <div style={{color:"red"}}>
          <label>First Name</label>
          <input
            required
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
            required
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
            required
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

            required
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
            required
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
            required
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
            required
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
            required
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
