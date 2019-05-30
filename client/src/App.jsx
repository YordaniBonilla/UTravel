import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";
import SignIn from "./Components/SignIn.jsx";
import Create from "./Components/Create.jsx";
import NoMatch from "./Components/NoMatch.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />>
          <Route path="/login" component={SignIn} />
          <Route path="/create" component={Create}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
