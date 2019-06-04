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
    .then(function (response) {
    // handle success
    console.log(response.data["0"].email);
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