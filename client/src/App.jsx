import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Swap from './Components/Swap';
import Greeting from './Components/Greeting';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/swap"
            render={() => <Greeting isLoggedIn={isLoggedIn} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
