
import React from 'react';
import { Link } from 'react-router-dom'

import { TopBar as string } from 'managers/string.js'

import * as style from 'managers/style.js'
import * as route from 'managers/route.js'

import './Bar.css';
import './TopBar.css';

const NAME_BAR_TOP = style.getClassName([
  'Bar', 'TopBar'
]);
const NAME_LINK_LARGE = 'LargeLink';
const NAME_LINK_SMALL = 'SmallLink';
const NAME_LAYOUT_CONTENT = 'ContentLayout';
const NAME_VIEW_CONTENT = 'ContentView';

const TopBar = () => (
  <header className={NAME_BAR_TOP}>
    <div className={NAME_LAYOUT_CONTENT}>
      <div className={NAME_VIEW_CONTENT}>
        <Link className={NAME_LINK_LARGE} to={route.FEED}>
          {string.feed()}
        </Link>
        <Link className={NAME_LINK_SMALL} to={route.ABOUT}>
          {string.about()}
        </Link>
      </div>
    </div>
  </header>
)

export default TopBar
