
import React from 'react';
import AdminSignUpForm from './forms/signup/AdminSignUpForm'

import { AdminSignUpView as string } from 'managers/string.js'
import * as parent from '../AdminAuthenticationView.js'

const AdminSignUpView = () => {
  return parent.render(string.title(), <AdminSignUpForm/>)
}

export default AdminSignUpView
