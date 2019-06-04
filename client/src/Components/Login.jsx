import React, { Component } from "react";
 const axios = require('axios');

class  Login extends Component {
    constructor ()  {
        super();
        this.state = {
            email : "",
            password : ""
        }

    }

    getData () {
    axios.get('/Login')
    .then((response) => {
    // handle success
      console.log(response.data["0"].email)
      console.log(response.data["0"].userpassword)
      this.setState({
        email: response.data["0"].email,
        password: response.data["0"].userpassword
      });
    console.log(this.state);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    }

    onSubmit = () => {
    this.getData();
    }

    render () {
      return (
        <div>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="submit" onClick={this.onSubmit}/>
        </div>
        );
    }
    
    
}

export default Login;