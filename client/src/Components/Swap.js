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
<<<<<<< HEAD
    selected: "",
    hasError: false,
    email:"",
    about:"",
    number:""
=======
    userlocation: "",
    about:"",
    userphone:""
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
  }
  



  handleChange = (event) => {
    this.setState({
            [event.target.name]: event.target.value
       })
<<<<<<< HEAD
    console.log(this.state[event.target.name])
  }

  handleClick() {

    this.setState({ hasError: false });
    if (this.state.selected.length === 0) {
      this.setState({ hasError: true });
    }
     const swapInfo = {
      selected: this.state.selected,
      email: this.state.email.toLowerCase(),
      about:"",
      number:"",
    };

     axios.post("/swap/info", { swapInfo })
      .then(response => {
        console.log(swapInfo)
    
=======
  }

  onSubmit = e => {
     e.preventDefault();
     const { userlocation, about, userphone } = this.state;
     axios.post('/Swap', { userlocation, about, userphone })
      .then(response => {
        console.log('switch')
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
      }).catch(error => {
        console.log(error);
      });

      this.setState({
<<<<<<< HEAD
      selected: "",
      email: "",
      about: "",
      number:""
=======
      userlocation: "",
      about: "",
      userphone:""

>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
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

    
<<<<<<< HEAD
    const { selected, hasError } = this.state;
=======
    const { userlocation } = this.state;
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
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
<<<<<<< HEAD
            <InputLabel htmlFor="text">Number</InputLabel>
            <Input id="text" type="text" name="number" value={this.state.number} onChange={this.handleChange}/>
=======
            <InputLabel htmlFor="text">Telephone Number</InputLabel>
            <Input id="text" type="text" name="userphone" value={this.state.userphone} onChange={this.handleChange}/>
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="text">About</InputLabel>
            <Input id="text" type="text" name="about" value={this.state.about} onChange={this.handleChange}/>
<<<<<<< HEAD
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
=======
          </FormControl>

          <FormControl  >
          <InputLabel htmlFor="name">Select Country</InputLabel>
          <Select
            name="userlocation"
            value={this.state.userlocation}
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
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
<<<<<<< HEAD
          {hasError && <FormHelperText>This is required!</FormHelperText>}
=======
          
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
        </FormControl>
    
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="file">House Image</InputLabel>
            <Input type="file" onChange={this.fileChangedHandler}/>
            <Button onClick={this.uploadHandler} variant="contained" size="medium">Upload!</Button>
          </FormControl>

<<<<<<< HEAD
          <button type="button" onClick={() => this.handleClick()}>
          Submit
        </button>

=======
          <Button variant="contained" color="primary" size="medium" type="submit" onClick={this.onSubmit}  value="Submit" >
               Submit
          </Button>
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9
        </form>
      </div>
      );
  }
}


export default Swap;

