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
      userpassword: "",
      userphone: "",
      age: "",
      users: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postData = (url = "", data = {}) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(err => console.error(err));
  };
  
  onSubmit = e => {
    e.preventDefault();
    const { fname, lname, email, userpassword, userphone, age } = this.state;

    this.postData("/Users", {
      fname: fname.toLowerCase(),
      lname: lname.toLowerCase(),
      email: email.toLowerCase(),
      userpassword: userpassword,
      userphone: userphone,
      age: age
    });

    this.setState({
      fname: "",
      lname: "",
      email: "",
      userpassword: "",
      userphone: "",
      age: ""
    });
  };
  render() {
    const {
      fname,
      lname,
      email,
      userpassword,
      userphone,
      age
    } = this.state;

    return (
      <form id="form" autoComplete="on">
        <div style={{ color: "red" }}>
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
        <div style={{ color: "red" }}>
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
        <div style={{ color: "red" }}>
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
        
        <div style={{ color: "red" }}>
          <label>Password</label>
          <input
            required
            id="password"
            type="password"
            maxLength="10"
            name="userpassword"
            value={userpassword}
            onChange={this.onChange}
          />
        </div>
        <div style={{ color: "red" }}>
          <label>Phone Number</label>
          <input
            required
            id="number"
            type="number"
            name="userphone"
            value={userphone}
            onChange={this.onChange}
          />
        </div>
        <div style={{ color: "red" }}>
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
        <button type="submit" onClick={this.onSubmit} value="Submit">Submit</button>

      </form>
    );
  }
}

export default Register;
