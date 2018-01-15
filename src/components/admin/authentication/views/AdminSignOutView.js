
import React from 'react';
import { Redirect } from 'react-router-dom'

import * as cache from 'managers/cache.js'
import * as route from 'managers/route.js'

const AdminSignOutView = () => {
  cache.setIsAdminAuthenticated(false);
  return <Redirect to={route.ADMIN_SIGN_IN}/>
}

export default AdminSignOutView
