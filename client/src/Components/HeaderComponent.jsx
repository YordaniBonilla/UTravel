import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavLink to="/">
          <Button style={{position: 'relative'}} variant="contained" color="secondary">
            Home
          </Button>
        </NavLink>
        <NavLink to="/register">
          <Button style={{position: 'relative', float: 'right'}} variant="contained" color="primary">
           Register
          </Button>
        </NavLink>
        <NavLink to ="/login">
          <Button style={{position: 'relative', float: 'right'}}variant="contained" color="primary">
            Login
          </Button>
        </NavLink>
      </>
    );
  }
}
