import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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
  }
});

const countries = [
  {
    value: "Country",
    label: "USA"
  },
  {
    value: "Country",
    label: "Japan"
  },
  {
    value: "Country",
    label: "Mexico"
  },
  {
    value: "Country",
    label: "Russia"
  },
  {
    value: "Country",
    label: "Brazil"
  }
];

class Register extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Email"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-multiline-flexible"
          label="About Me:"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange("age")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />

        <TextField
          id="standard-select-currency-native"
          select
          label="Select Countrie"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
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
      </form>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
