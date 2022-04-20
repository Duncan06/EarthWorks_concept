import React from "react";
import classes from "./PricePage.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};
export default class CustomerValidation extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const boxChecked = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: boxChecked
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";

    if (this.state.firstName === "") {
      firstNameError = "No first name provided.";
    }

    if (this.state.lastName === "") {
      lastNameError = "No last name provided.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "No email provided.";
    }

    if (firstNameError) {
      this.setState({ firstNameError });
    }

    if (lastNameError) {
      this.setState({ lastNameError });
    }

    if (emailError) {
      this.setState({ emailError });
    }

    if (firstNameError || lastNameError || emailError) {
      this.setState({ firstNameError, lastNameError, emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form className={classes.customerInfo} onSubmit={this.handleSubmit}>
        <div className={classes.customerText}>
          <label for="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {this.state.firstNameError} </div>
        </div>

        <div className={classes.customerText}>
          <label for="lastName">Last Name:</label>
          <input
            id="lastName"
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
            id="email"
            name="email"
            placeholder="Example@gmail.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {this.state.emailError} </div>
        </div>

        <div className={classes.checkboxTitle}>Types of related work</div>
        <div className={classes.jobOptions}>
          <label for="foundationLeveling">Foundation Leveling</label>
          <input
            type="checkbox"
            id="foundationLeveling"
            name="foundationLeveling"
            onChange={this.handleChange}
          />
          <label for="irrigation">Irrigation</label>
          <input
            type="checkbox"
            id="irrigation"
            name="irrigation"
            onChange={this.handleChange}
          />
          <label for="siteAnalysis">Site Analysis</label>
          <input
            type="checkbox"
            id="siteAnalysis"
            name="siteAnalysis"
            onChange={this.handleChange}
          />
          <label for="consulting">Consulting</label>
          <input
            type="checkbox"
            id="consulting"
            name="consulting"
            onChange={this.handleChange}
          />
          <label for="codeCompliance">Code Compliance</label>
          <input
            type="checkbox"
            id="codeCompliance"
            name="codeCompliance"
            onChange={this.handleChange}
          />
        </div>

        <div className={classes.dates}>
          <label for="startDate">Desired start date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={this.handleChange}
          />
          <label for="endDate">Desired end date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    );
  }
}
