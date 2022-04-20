import React from "react";
import classes from "./PricePage.module.css";

export default class CustomerValidation extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    firstNameError: "No first name provided.",
    lastNameError: "No last name provided.",
    emailError: "No email provided.",
  };

  handleChange = (event) => {
    const boxChecked = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: boxChecked
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className={classes.customerInfo} onSubmit={this.handleSubmit}>
        <div className={classes.customerText}>
          <label for="firstName">First Name:</label>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {this.state.firstNameError} </div>
        </div>
        <div className={classes.customerText}>
          <label for="LastName">Last Name:</label>
          <input
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {this.state.lastNameError} </div>
        </div>
        <div className={classes.customerText}>
          <label for="email">Email:</label>
          <input
            name="email"
            placeholder="Example@gmail.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {this.state.emailError} </div>
        </div>
      </form>
    );
  }
}
