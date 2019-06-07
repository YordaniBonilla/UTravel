import React, { Component } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">About</InputLabel>
            <Input id="text" type="text"/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">email</InputLabel>
            <Input id="text" type="email"/>
          </FormControl>

           <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">Number</InputLabel>
            <Input id="text" type="text"/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="file">House Image</InputLabel>
            <Input type="file" onChange={this.fileChangedHandler}/>
            <Button onClick={this.uploadHandler} variant="contained" size="medium">Upload!</Button>
          </FormControl>
        </form>
      </div>
      );
  }
}

export default Swap;

