import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import ButtonCss from "../Stylesheets/Button.css";
import "../Stylesheets/Button.css";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavLink to="/">
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <ButtonCss variant="contained" color="primary">
              Home
            </ButtonCss>
          </JssProvider>
        </NavLink>
        <NavLink to="/register">
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <ButtonCss variant="contained" color="primary">
              Register
            </ButtonCss>
          </JssProvider>
        </NavLink>
        <NavLink to="/login">
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <ButtonCss variant="contained" color="primary">
              Login
            </ButtonCss>
          </JssProvider>
        </NavLink>
      </>
    );
  }
}
