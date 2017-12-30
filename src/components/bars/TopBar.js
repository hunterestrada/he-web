
import React from 'react';
import { Link } from 'react-router-dom'

import { TopBar as string } from 'constants/string.js'

import * as style from 'constants/style.js'
import * as route from 'constants/route.js'

import './Bar.css';
import './TopBar.css';

const NAME_BAR_TOP = style.getClassName([
  'Bar', 'TopBar'
]);
const NAME_LINK_LARGE = 'LargeLink';
const NAME_LINK_SMALL = 'SmallLink';
const NAME_CONTENT_BAR_TOP = 'TopBarContent'

const TopBar = () => (
  <header className={NAME_BAR_TOP}>
    <div className={NAME_CONTENT_BAR_TOP}>
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
