import React, { Component } from 'react';
import axios from 'axios';

class Swap extends Component {
  state = {
    selectedFile: null
  }

  fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
  }
  

  uploadHandler = () => {
  const formData = new FormData()
  formData.append(
    'myFile',
    this.state.selectedFile,
    this.state.selectedFile.name
  )
  axios.post('/swap', formData, {
    onUploadProgress: progressEvent => {
      console.log(progressEvent.loaded / progressEvent.total)
      
    }
  })
}
  render() {
    return (
      <div>
      <input type="file" onChange={this.fileChangedHandler}/>
      <button onClick={this.uploadHandler}>Upload!</button>
      <input type="text" placeholder="about"/>
      <input type="text" placeholder="userlocation"/>
      <input type="text" placeholder="userdestination"/>
      <input type="submit" />
      

      </div>
      );
  }
}

export default Swap;