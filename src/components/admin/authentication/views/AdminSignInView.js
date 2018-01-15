
import React from 'react'

import AdminSignInForm from './forms/signin/AdminSignInForm'
import { AdminSignInView as string } from 'managers/string.js'

import * as parent from '../AdminAuthenticationView'

const AdminSignInView = () => {
  return parent.render(string.title(), <AdminSignInForm/>);
}

export default AdminSignInView
