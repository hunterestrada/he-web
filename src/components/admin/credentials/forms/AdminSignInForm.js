
import React from 'react'

import { AdminSignInForm as string } from 'constants/string.js'
import * as form from 'constants/form.js'

import './AdminSignInForm.css'

const NAME_FORM_SIGN_IN_ADMIN = 'AdminSignInForm';

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
        onSubmit={this.onUserTapSubmit}>
        <input type={form.TYPE_INPUT_TEXT}
          placeholder={string.emailPlaceholder()}/>
        <input type={form.TYPE_INPUT_TEXT}
          placeholder={string.passwordPlaceholder()}/>
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
    alert('Access Granted');
  }

}

export default AdminSignInForm
