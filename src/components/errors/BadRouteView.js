
import React from 'react'

import { BadRouteView as string } from 'managers/string.js'
import * as style from 'managers/style.js'

import './BadRouteView.css'

const NAME_VIEW_ROUTE_BAD = style.getContentComponentClassName([
  'BadRouteView'
])

const NAME_VIEW_CONTENT = style.getClassName([
  style.NAME_CARD, 'ContentView'
]);

const BadRouteView = () => (
  <div className={NAME_VIEW_ROUTE_BAD}>
    <div className={NAME_VIEW_CONTENT}>
      <h1>{string.title()}</h1>
      <h2>{string.subtitle()}</h2>
    </div>
  </div>
)

export default BadRouteView
