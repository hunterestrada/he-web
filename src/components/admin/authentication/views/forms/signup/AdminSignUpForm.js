
import * as api from 'managers/api.js'
import * as parent from '../AdminAuthenticationForm.js'
import { AdminAuthenticationForm as string } from 'managers/string.js'

class AdminSignUpForm extends parent.AdminAuthenticationForm {

  render() {
    return super.render(true)
  }

  onUserTapSubmit = (event) => {
    if (parent.onUserTapSubmit(event, this.state)) {
      return;
    }
    const email = this.state.email;
    const password = this.state.password;
    const repeatedPassword = this.state.repeatedPassword;
    if (password !== repeatedPassword) {
      return alert(string.invalidPasswordMatch());
    }
    this.attemptSigningUpUser(email, password);
  }

  attemptSigningUpUser = (validatedEmail, validatedPassword) => {
    api.postSignUpToken(
      validatedEmail, validatedPassword
    ).then(json =>
      super.onAdminAuthenticated()
    ).catch(
      error => {
        if (error.status) {
          alert(error.status);
        }
      }
    )
  }

}

export default AdminSignUpForm
