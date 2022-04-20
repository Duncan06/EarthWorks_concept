import React from "react";

export default class CustomerValidation extends React.Component {
  state = {
    firstName: "",
    email: "",
    password: "",
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="firstName">First Name:</label>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
