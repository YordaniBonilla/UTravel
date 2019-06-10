import React, { Component } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
class Swap extends Component {
  state = {
    selectedFile: null,
    userlocation: "",
    about:"",
    userphone:""
  }
  



  handleChange = (event) => {
    this.setState({
            [event.target.name]: event.target.value
       })
  }

  onSubmit = e => {
     e.preventDefault();
     const { userlocation, about, userphone } = this.state;
     axios.post('/Swap', { userlocation, about, userphone })
      .then(response => {
        console.log('switch')
      }).catch(error => {
        console.log(error);
      });

      this.setState({
      userlocation: "",
      about: "",
      userphone:""

    });
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

    
    const { userlocation } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form  autoComplete="off" style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">Telephone Number</InputLabel>
            <Input id="text" type="text" name="userphone" value={this.state.userphone} onChange={this.handleChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">About</InputLabel>
            <Input id="text" type="text" name="about" value={this.state.about} onChange={this.handleChange}/>
          </FormControl>

          <FormControl  >
          <InputLabel htmlFor="name">Select Country</InputLabel>
          <Select
            name="userlocation"
            value={this.state.userlocation}
            onChange={this.handleChange}
            input={<Input id="name" />}
          >
            <MenuItem value="Mexico">Mexico</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="India">India</MenuItem>
          </Select>
          
        </FormControl>
    
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="file">House Image</InputLabel>
            <Input type="file" onChange={this.fileChangedHandler}/>
            <Button onClick={this.uploadHandler} variant="contained" size="medium">Upload!</Button>
          </FormControl>

          <Button variant="contained" color="primary" size="medium" type="submit" onClick={this.onSubmit}  value="Submit" >
               Submit
          </Button>
        </form>
      </div>
      );
  }
}


export default Swap;

