import React from "react";
import classes from "./PricePage.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  startDateError: "",
  endDateError: "",
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
    let startDateError = "";
    let endDateError = "";
    const currentStartDate = new Date(`${this.state.startDate}, 00:00:00`);
    const currentEndDate = new Date(`${this.state.endDate}, 00:00:00`);
    const date = new Date();

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

    if (!this.state.startDate || currentStartDate < date) {
      startDateError = "Please provide an appropriate date.";
    }

    if (!this.state.endDate || currentEndDate < currentStartDate) {
      endDateError = "Please provide a date after the start date.";
    }

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      startDateError ||
      endDateError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        emailError,
        startDateError,
        endDateError,
      });
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
        <div className={classes.topContainer}>
          <div className={classes.textContainer}>
            <div className={classes.customerText}>
              <label htmlFor="firstName">First Name: </label>
              <input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <div className={classes.textError}>
                {" "}
                {this.state.firstNameError}{" "}
              </div>
            </div>
            <div className={classes.customerText}>
              <label htmlFor="lastName">Last Name: </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <div className={classes.textError}>
                {" "}
                {this.state.lastNameError}{" "}
              </div>
            </div>
            <div className={classes.customerText}>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                placeholder="Example@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div className={classes.textError}> {this.state.emailError} </div>
            </div>
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxTitle}>Types of related work</div>
            <div className={classes.jobOptions}>
              <label htmlFor="foundationLeveling">Foundation Leveling</label>
              <input
                type="checkbox"
                id="foundationLeveling"
                name="foundationLeveling"
                onChange={this.handleChange}
              />
              <label htmlFor="irrigation">Irrigation</label>
              <input
                type="checkbox"
                id="irrigation"
                name="irrigation"
                onChange={this.handleChange}
              />
              <label htmlFor="siteAnalysis">Site Analysis</label>
              <input
                type="checkbox"
                id="siteAnalysis"
                name="siteAnalysis"
                onChange={this.handleChange}
              />
              <label htmlFor="consulting">Consulting</label>
              <input
                type="checkbox"
                id="consulting"
                name="consulting"
                onChange={this.handleChange}
              />
              <label htmlFor="codeCompliance">Code Compliance</label>
              <input
                type="checkbox"
                id="codeCompliance"
                name="codeCompliance"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <div className={classes.dateContainer}>
          <div className={classes.dates}>
            <label htmlFor="startDate">Desired start date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              onChange={this.handleChange}
            />
            <div className={classes.textError}>
              {" "}
              {this.state.startDateError}{" "}
            </div>
            <label htmlFor="endDate">Desired end date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              onChange={this.handleChange}
            />
            <div className={classes.textError}> {this.state.endDateError} </div>
          </div>
        </div>

        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    );
  }
}
