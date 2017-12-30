
import React from 'react'

import { BadRouteView as string } from 'constants/string.js'
import * as name from 'constants/name.js'

import './BadRouteView.css'

const NAME_VIEW_ROUTE_BAD = name.getContentClassName([
  'BadRouteView'
])

const BadRouteView = () => (
  <div className={NAME_VIEW_ROUTE_BAD}>
    <h1>{string.title()}</h1>
    <h2>{string.subtitle()}</h2>
  </div>
)

export default BadRouteView
