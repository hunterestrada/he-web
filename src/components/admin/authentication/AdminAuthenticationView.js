
import React from 'react';
import { Redirect } from 'react-router-dom'

import * as cache from 'managers/cache.js'
import * as route from 'managers/route.js'
import * as style from 'managers/style.js'

import './AdminAuthenticationView.css'

const NAME_VIEW_ADMIN_AUTHENTICATION = style.getContentComponentClassName([
  'AdminAuthenticationView'
]);

const NAME_VIEW_CONTENT = style.getClassName([
  style.NAME_CARD, 'ContentView'
]);

export const render = (title, form) => {

  if (cache.getIsAdminAuthenticated()) {
    return <Redirect to={route.ADMIN}/>
  }
  return (
    <div className={NAME_VIEW_ADMIN_AUTHENTICATION}>
      <div className={NAME_VIEW_CONTENT}>
        <h1>
          {title}
        </h1>
        {form}
      </div>
    </div>
  )
}
