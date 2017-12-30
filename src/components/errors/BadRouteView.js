
import React from 'react'

import { BadRouteView as string } from 'constants/string.js'
import * as style from 'constants/style.js'

import './BadRouteView.css'

const NAME_VIEW_ROUTE_BAD = style.getContentComponentClassName([
  'BadRouteView'
])

const BadRouteView = () => (
  <div className={NAME_VIEW_ROUTE_BAD}>
    <h1>{string.title()}</h1>
    <h2>{string.subtitle()}</h2>
  </div>
)

export default BadRouteView
