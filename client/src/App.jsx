import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import Swap from "./Components/Swap";
import Greeting from "./Components/Greeting";
import GuestGreeting from "./Components/GuestGreeting"

class App extends Component {
  constructor() {
    super();
  this.state = {
    isLoggedIn: false
  }

 }


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}/>
          <Route path="/swap" render={() => <Greeting isLoggedIn={this.state.isLoggedIn} />}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
