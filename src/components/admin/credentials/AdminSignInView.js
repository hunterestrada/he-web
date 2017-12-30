
import React from 'react';

import * as name from 'constants/name.js'
import './AdminSignInView.css'


const NAME_VIEW_SIGN_IN_ADMIN = name.getContentClassName([
  'AdminSignInView'
]);


class AdminSignInView extends React.Component {

  render() {
    return (
      <div className={NAME_VIEW_SIGN_IN_ADMIN}>
      </div>
    )
  }

}

export default AdminSignInView
