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
      </div>
      );
  }
}

export default Swap;