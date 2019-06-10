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
    selected: "",
    hasError: false,
    email:"",
    about:"",
    number:""
  }
  



  handleChange = (event) => {
    this.setState({
            [event.target.name]: event.target.value
       })
    console.log(this.state[event.target.name])
  }

  handleClick() {

    this.setState({ hasError: false });
    if (this.state.selected.length === 0) {
      this.setState({ hasError: true });
    }
     
     const { selected, email, about, number } = this.state;
     axios.post("/info", { selected, email, about, number })
      .then(response => {
    
      }).catch(error => {
        console.log(error);
      });

      this.setState({
      selected: "",
      email: "",
      about: "",
      number:""
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

    
    const { selected, hasError } = this.state;
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
            <InputLabel htmlFor="text">Number</InputLabel>
            <Input id="text" type="text" name="number" value={this.state.number} onChange={this.handleChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">About</InputLabel>
            <Input id="text" type="text" name="about" value={this.state.about} onChange={this.handleChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">email</InputLabel>
            <Input id="text" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </FormControl>

          <FormControl  error={hasError}>
          <InputLabel htmlFor="name">Select Country</InputLabel>
          <Select
            name="selected"
            value={this.state.selected}
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
          {hasError && <FormHelperText>This is required!</FormHelperText>}
        </FormControl>
    
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="file">House Image</InputLabel>
            <Input type="file" onChange={this.fileChangedHandler}/>
            <Button onClick={this.uploadHandler} variant="contained" size="medium">Upload!</Button>
          </FormControl>

          <button type="button" onClick={() => this.handleClick()}>
          Submit
        </button>

        </form>
      </div>
      );
  }
}


export default Swap;

