import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      userpassword: "",
      userphone: "",
      users: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
 
  onSubmit = e => {
    e.preventDefault();
    const user = {
      fname: this.state.fname.toLowerCase(),
      lname: this.state.lname.toLowerCase(),
      email: this.state.email.toLowerCase(),
      userpassword: this.state.userpassword,
      userphone: this.state.userphone
    };

     axios.post("/Users", { user })
      .then(response => {
    
      }).catch(error => {
        console.log(error);
      });

      this.setState({
      fname: "",
      lname: "",
      email: "",
      userpassword: "",
      userphone: ""
    });
    };
    

  render() {
    const {
      fname,
      lname,
      email,
      userpassword,
      userphone
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
            type="text"
            name="userphone"
            value={userphone}
            onChange={this.onChange}
          />
        </div>
        <button type="submit" onClick={this.onSubmit} value="Submit">Submit</button>

      </form>
    );
  }
}

export default Register;
