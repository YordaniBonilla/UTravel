import React, { Component } from 'react';
import axios from 'axios';
class Swap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedFile: null 
        };
    }

   
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0];
        })
        //console.log(event.target.files[0]);
    }
    //set state before uploading file
    fileUploadHandler = () => {}
    render () {
      return (
        <div>
        //need to be able to upload an image to database
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
        <input/>
        //user location which is country
        //about
        //twitter 
        //facebook
        <input type='text'/>
        </div>
      );
    }  
        
}

export default Swap;