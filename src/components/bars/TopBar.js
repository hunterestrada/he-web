
import React from 'react';
import { Link } from 'react-router-dom'

import { TopBar as string } from 'constants/string.js'

import * as name from 'constants/name.js'
import * as route from 'constants/route.js'

import './Bar.css';
import './TopBar.css';

const NAME_BAR_TOP = name.getClassName([
  'Bar', 'TopBar'
]);
const NAME_LINK_LARGE = 'LargeLink';
const NAME_LINK_SMALL = 'SmallLink';
const NAME_LINK_HOLDER = 'LinkHolder'

const TopBar = () => (
  <header className={NAME_BAR_TOP}>
    <div className={NAME_LINK_HOLDER}>
      <Link className={NAME_LINK_LARGE} to={route.FEED}>
        {string.feed()}
      </Link>
      <Link className={NAME_LINK_SMALL} to={route.ABOUT}>
        {string.about()}
      </Link>
    </div>
  </header>
)

export default TopBar
