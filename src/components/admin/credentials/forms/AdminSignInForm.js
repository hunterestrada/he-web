
import React from 'react'

import { AdminCredentialForm as string } from 'managers/string.js'
import * as api from 'managers/api.js'
import * as form from 'managers/form.js'

import './AdminSignInForm.css'
import './CredentialInput.css'

const NAME_FORM_SIGN_IN_ADMIN = 'AdminSignInForm';
const NAME_INPUT_CREDENTIAL = 'CredentialInput';

class AdminSignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onUserEditEmail = this.onUserEditEmail.bind(this);
    this.onUserEditPassword = this.onUserEditPassword.bind(this);
    this.onUserTapSubmit = this.onUserTapSubmit.bind(this);
  }

  render() {
    return (
      <form className={NAME_FORM_SIGN_IN_ADMIN}
        method={form.METHOD_POST}
        onSubmit={this.onUserTapSubmit}>
        <input className={NAME_INPUT_CREDENTIAL}
          type={form.TYPE_INPUT_EMAIL}
          placeholder={string.emailPlaceholder()}
          value={this.state.email}
          onChange={this.onUserEditEmail}/>
        <input className={NAME_INPUT_CREDENTIAL}
          type={form.TYPE_INPUT_PASSWORD}
          placeholder={string.passwordPlaceholder()}
          value={this.state.password}
          onChange={this.onUserEditPassword}/>
        <input className={NAME_INPUT_CREDENTIAL}
          type={form.TYPE_INPUT_SUBMIT}
          value={string.submit()}/>
      </form>
    );
  }

  onUserEditEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  onUserEditPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  onUserTapSubmit(event) {
    event.preventDefault();
    const email = this.state.email || '';
    const password = this.state.password || '';
    const isValidEmail = form.didValidateEmail(email);
    const isValidPassword = form.didValidatePassword(password);
    const isValidCredential = isValidEmail || isValidPassword;
    if (!isValidCredential) {
      return alert(string.invalidCredentials());
    }
    if (!isValidEmail) {
      return alert(string.invalidEmail());
    }
    if (!isValidPassword) {
      return alert(string.invalidPassword());
    }
    api.postSignInToken(
      email, password
    ).then(
      value => console.log(value)
    ).catch(
      error => {
        alert(error.status)
      }
    )
  }

}

export default AdminSignInForm
