
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { TopBar as string } from 'constants/string.js'
import * as route from 'constants/route.js'

import './TopBar.css';

const NAME_BAR_TOP = 'TopBar';
const NAME_LINK_LARGE = 'LargeLink'
const NAME_LINK_SMALL = 'SmallLink'

class TopBar extends Component {

  render() {
    return (
      <div className={NAME_BAR_TOP}>
        <Link className={NAME_LINK_LARGE} to={route.FEED}>
          {string.feed()}
        </Link>
        <Link className={NAME_LINK_SMALL} to={route.ABOUT}>
          {string.about()}
        </Link>
      </div>
    );
  }

}

export default TopBar
