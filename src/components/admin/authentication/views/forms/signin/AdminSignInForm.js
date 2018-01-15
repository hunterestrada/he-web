
import * as api from 'managers/api.js'
import * as parent from '../AdminAuthenticationForm.js'

class AdminSignInForm extends parent.AdminAuthenticationForm {

  render() {
    return super.render(false)
  }

  onUserTapSubmit = (event) => {
    if (parent.onUserTapSubmit(event, this.state)) {
      return;
    }
    const email = this.state.email;
    const password = this.state.password;
    this.attemptSigningInUser(email, password);
  }

  attemptSigningInUser = (validatedEmail, validatedPassword) => {
    api.postSignInToken(
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

export default AdminSignInForm
