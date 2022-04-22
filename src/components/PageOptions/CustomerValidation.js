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

let lastWorkingEmail = { email: "" };

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
    // Simple verification, https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (this.state.firstName === "") {
      firstNameError = "No first name provided.";
    }

    if (this.state.lastName === "") {
      lastNameError = "No last name provided.";
    }

    if (!this.state.email.match(mailFormat)) {
      emailError = "Not a proper email format.";
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

    if (!this.state.endDate || currentEndDate <= currentStartDate) {
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
      lastWorkingEmail = this.state;
      this.setState(initialState);
    }
  };

  // Increase readability by reducing wrappers.
  createDesiredInput(type, name, placeholderValue = "", error = "") {
    if (type === "text") {
      return (
        <div className={classes.customerText}>
          <label htmlFor={name}>{placeholderValue}: </label>
          <input
            id={name}
            name={name}
            placeholder={placeholderValue}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {error} </div>
        </div>
      );
    }
    if (type === "checkbox") {
      return (
        <div className={classes.boxcheckLine}>
          <input
            type="checkbox"
            id={name}
            name={name}
            onChange={this.handleChange}
          />
          <label htmlFor={name}>{placeholderValue}</label>
        </div>
      );
    }
    if (type === "date") {
      return (
        <div className={classes.dateLine}>
          <label htmlFor={name}>{placeholderValue}</label>
          <input
            type="date"
            id={name}
            name={name}
            onChange={this.handleChange}
          />
          <div className={classes.textError}> {error} </div>
        </div>
      );
    }
  }

  render() {
    return (
      <form className={classes.customerInfo} onSubmit={this.handleSubmit}>
        <div className={classes.topContainer}>
          <div className={classes.textContainer}>
            {this.createDesiredInput(
              "text",
              "firstName",
              "First Name",
              `${this.state.firstNameError}`
            )}

            {this.createDesiredInput(
              "text",
              "lastName",
              "Last Name",
              `${this.state.lastNameError}`
            )}

            {this.createDesiredInput(
              "text",
              "email",
              "Email address",
              `${this.state.emailError}`
            )}
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxTitle}>Types of related work</div>
            <div className={classes.jobOptions}>
              {this.createDesiredInput(
                "checkbox",
                "foundationLeveling",
                "Foundation Leveling"
              )}
              {this.createDesiredInput("checkbox", "irrigation", "Irrigation")}
              {this.createDesiredInput(
                "checkbox",
                "siteAnalysis",
                "Site Analysis"
              )}
              {this.createDesiredInput("checkbox", "consulting", "Consulting")}
              {this.createDesiredInput(
                "checkbox",
                "codeCompliance",
                "Code Compliance"
              )}
            </div>
          </div>
        </div>

        <div className={classes.dateContainer}>
          <div className={classes.dates}>
            {this.createDesiredInput(
              "date",
              "startDate",
              "Desired start date: ",
              `${this.state.startDateError}`
            )}

            {this.createDesiredInput(
              "date",
              "endDate",
              "Desired end date: ",
              `${this.state.endDateError}`
            )}
          </div>
        </div>

        <button type="submit" className={classes.submitButton}>
          Submit
        </button>

        {lastWorkingEmail.email !== "" && (
          <div>
            <div>
              Click the link below to send the last valid submission's
              information through email:{" "}
            </div>
            {/* %0D%0A creates new line in the email. Formatted for email structure to avoid unwanted newlines.*/}
            <a
              href={`mailto:j.c.earthworks@gmail.com?subject=Project Request&body=Start: ${
                lastWorkingEmail.startDate
              }%0D%0AEnd: ${lastWorkingEmail.endDate}%0D%0A%0D%0AAreas:${
                lastWorkingEmail.foundationLeveling
                  ? " Foundation leveling,"
                  : ""
              } ${lastWorkingEmail.irrigation ? "Irrigation," : ""} ${
                lastWorkingEmail.siteAnalysis ? "Site Analysis," : ""
              } ${lastWorkingEmail.consulting ? "Consulting," : ""} ${
                lastWorkingEmail.codeCompliance ? "Code compliance" : ""
              }%0D%0AFirst Name: ${
                lastWorkingEmail.firstName
              }%0D%0ALast Name: ${lastWorkingEmail.lastName}%0D%0AEmail: ${
                lastWorkingEmail.email
              }`}
            >
              j.c.earthworks@gmail.com
            </a>
          </div>
        )}
      </form>
    );
  }
}
