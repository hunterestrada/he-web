
import React from 'react'

import * as name from 'constants/name.js'

const NAME_VIEW_SIGN_UP_ADMIN = name.getContentClassName([
  'AdminSignUpView'
])

class AdminSignUpView extends React.Component {

  render() {
    return (
      <div className={NAME_VIEW_SIGN_UP_ADMIN}>
      </div>
    )
  }

}

export default AdminSignUpView
