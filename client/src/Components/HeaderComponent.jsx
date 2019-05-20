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
          <Button variant="contained" color="primary">
            Home
          </Button>
        </NavLink>
        <NavLink to="/register">
          <Button variant="contained" color="primary">
            Register
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </NavLink>
      </>
    );
  }
}
