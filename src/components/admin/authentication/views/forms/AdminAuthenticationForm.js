
import React from 'react'
import { Redirect } from 'react-router-dom'

import * as cache from 'managers/cache.js'
import * as form from 'managers/form.js'
import * as route from 'managers/route.js'
import { AdminAuthenticationForm as string } from 'managers/string.js'

import './AdminAuthenticationForm.css'

const NAME_FORM_AUTHENTICATION_ADMIN = 'AdminAuthenticationForm';
const NAME_VIEW_TEXT_CREDENTIAL = 'CredentialTextView';

export const onUserTapSubmit = (event, state) => {
  event.preventDefault();
  const email = state.email || '';
  const password = state.password || '';
  const isValidEmail = form.didValidateEmail(email);
  const isValidPassword = form.didValidatePassword(password);
  const isValidCredential = isValidEmail || isValidPassword;
  if (!isValidCredential) {
    alert(string.invalidCredentials());
    return true;
  }
  if (!isValidEmail) {
    alert(string.invalidEmail());
    return true;
  }
  if (!isValidPassword) {
    alert(string.invalidPassword());
    return true;
  }
  return false;
}

export class AdminAuthenticationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatedPassword: '',
      isAdminAuthenticated: cache.getIsAdminAuthenticated()
    };
  }

  onAdminAuthenticated() {
    this.setState({
      isAdminAuthenticated: true
    });
  }

  render(isRepeatedPasswordVisible) {
    if (this.state.isAdminAuthenticated) {
      return <Redirect to={route.ADMIN}/>
    }
    return (
      <form className={NAME_FORM_AUTHENTICATION_ADMIN}
        method={form.METHOD_POST}
        onSubmit={this.onUserTapSubmit}>
        <input className={NAME_VIEW_TEXT_CREDENTIAL}
          type={form.TYPE_INPUT_EMAIL}
          placeholder={string.emailPlaceholder()}
          value={this.state.email}
          onChange={this.onUserEditEmail}/>
        <input className={NAME_VIEW_TEXT_CREDENTIAL}
          type={form.TYPE_INPUT_PASSWORD}
          placeholder={string.passwordPlaceholder()}
          value={this.state.password}
          onChange={this.onUserEditPassword}/>
        <input className={NAME_VIEW_TEXT_CREDENTIAL}
          type={
            (isRepeatedPasswordVisible) ? form.TYPE_INPUT_PASSWORD : form.TYPE_INPUT_HIDDEN
          }
          placeholder={string.repeatedPasswordPlaceholder()}
          value={this.state.repeatedPassword}
          onChange={this.onUserEditRepeatedPassword}/>
        <input className={NAME_VIEW_TEXT_CREDENTIAL}
          type={form.TYPE_INPUT_SUBMIT}
          value={string.submit()}>
        </input>
      </form>
    );
  }

  onUserEditEmail = (event) => {
    this.setState({
      email: event.target.value || ''
    });
  }

  onUserEditPassword = (event) => {
    this.setState({
      password: event.target.value || ''
    });
  }

  onUserEditRepeatedPassword = (event) => {
    this.setState({
      repeatedPassword: event.target.value || ''
    });
  }

}
