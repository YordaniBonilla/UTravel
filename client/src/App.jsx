import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import Swap from "./Components/Swap"
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}/>
          <Route path="/swap" component={Swap}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
