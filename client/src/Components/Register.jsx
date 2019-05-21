import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

const countries = [
  {
    value: "us",
    label: "USA"
  },
  {
    value: "jp",
    label: "Japan"
  },
  {
    value: "mx",
    label: "Mexico"
  },
  {
    value: "rs",
    label: "Russia"
  },
  {
    value: "bzl",
    label: "Brazil"
  }
];

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    aboutme: "",
    password: "",
    number: "",
    age: "",
    country: "",
    value: ""
  };

  handleChangeName = name => event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeEmail = email => event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangeAbout = aboutme => event => {
    this.setState({
      aboutme: event.target.value
    });
  };

  handleChangePassword = password => event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangeNumber = number => event => {
    this.setState({
      number: event.target.value
    });
  };

  handleChangeAge = age => event => {
    this.setState({
      age: event.target.value
    });
  };

  handleChangeCountry = country => event => {
    this.setState({
      country: event.target.value
    });
  };

  handleChangeValue = value => event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.aboutme);

    return (
      <form
        className={(classes.container, classes.root)}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChangeName("name")}
          margin="dense"
        />

        <TextField
          required
          id="standard-required"
          label="Email"
          defaultValue="Hello World"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChangeEmail("email")}
          margin="normal"
        />

        <TextField
          multiline
          id="standard-aboutme"
          label="aboutme"
          className={classes.textField}
          value={this.state.aboutme}
          onChange={this.handleChangeAbout("aboutme")}
          margin="dense"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.handleChangePassword("password")}
          margin="normal"
        />

        <TextField
          id="standard-number"
          label="Number"
          className={classes.textField}
          value={this.state.number}
          onChange={this.handleChangeAge("number")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />

        <TextField
          id="standard-age"
          label="age"
          className={classes.textField}
          value={this.state.age}
          onChange={this.handleChangeAge("age")}
          type="age"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />

        <TextField
          id="standard-select-country-native"
          select
          label="Select Country"
          className={classes.textField}
          value={this.state.country}
          onChange={this.handleChangeCountry("country")}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your countrie"
          margin="normal"
        >
          {countries.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange2}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </form>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
