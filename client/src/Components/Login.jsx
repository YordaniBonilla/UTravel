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
    axios.get('/login')
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    }

    componentDidMount(){
    this.getData();
    }

    render () {
      return (
        <div>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
        </div>
        );
    }
    
    
}

export default Login;