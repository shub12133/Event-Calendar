import React, { Component } from 'react';
import './signUp.css';

const passRegex = RegExp(
  '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
);
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5 ? '!' : '';
        break;
      case 'email':
        /*errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email nije ispravno unešen!';*/
        break;
      case 'password':
        errors.password = passRegex.test(value)
          ? ''
          : '';
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
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor='fullName'>Username</label>
              <input
                type='text'
                name='fullName'
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className='info'>
              <small>.</small>
            </div>
            <div className='submit'>
              <button class='btnForm'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
