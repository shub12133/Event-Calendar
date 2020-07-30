import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Morate upisati minimalno 5 znakova!" : "";
        break;
      case "email":
        /*errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email nije ispravno unešen!';*/
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Lozinka mora biti veća od 8 znakova!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Username</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className="password">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className="info">
              <small>password.</small>
            </div>
            <div className="submit">
              <button class="btnForm">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
