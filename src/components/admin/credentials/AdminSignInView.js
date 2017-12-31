
import React from 'react';
import AdminSignInForm from './forms/AdminSignInForm'

import * as style from 'managers/style.js'
import { AdminSignInView as string } from 'managers/string.js'
import './AdminSignInView.css'


const NAME_VIEW_SIGN_IN_ADMIN = style.getContentComponentClassName([
  'AdminSignInView'
]);


class AdminSignInView extends React.Component {

  render() {
    return (
      <div className={NAME_VIEW_SIGN_IN_ADMIN}>
        <h1>{string.title()}</h1>
        <AdminSignInForm/>
      </div>
    )
  }

}

export default AdminSignInView
