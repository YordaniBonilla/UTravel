import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />>
            <Route path="/login"  component={Login} />
          </Switch>
    </Router>
    )
  }
}

 export default App;
