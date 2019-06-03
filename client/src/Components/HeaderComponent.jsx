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
          <Button style={{position: 'absolute', top: 20, left: 300, right: 100, bottom: 0, height: "35px", width: "80px"}}variant="contained" color="secondary">
            Home
          </Button>
        </NavLink>
        <NavLink to="/register">
          <Button style={{position: 'absolute', top: 20, left: 600, right: 100, bottom: 0, height: "35px", width: "80px"}} variant="contained" color="primary">
           Upload Home
          </Button>
        </NavLink>
      </>
    );
  }
}
