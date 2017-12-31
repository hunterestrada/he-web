
import React from 'react'

import SocialIcon from 'components/icons/SocialIcon.js'

import { BottomBar as string } from 'managers/string.js'
import * as style from 'managers/style.js'

import './Bar.css'
import './BottomBar.css'

const NAME_BAR_BOTTOM = style.getClassName([
  'Bar', 'BottomBar'
]);
const NAME_CONTENT_BAR_BOTTOM = 'BottomBarContent';

const BottomBar = () => (
  <footer className={NAME_BAR_BOTTOM}>
    <div className={NAME_CONTENT_BAR_BOTTOM}>
      <SocialIcon href={string.twitterLink()}
        src={string.twitterImageLink()}
        alt={string.twitterTitle()}/>
      <SocialIcon href={string.instagramLink()}
        src={string.instagramImageLink()}
        alt={string.instagramTitle()}/>
      <SocialIcon href={string.linkedInLink()}
        src={string.linkedInImageLink()}
        alt={string.linkedInTitle()}/>
      <SocialIcon href={string.gitHubLink()}
        src={string.gitHubImageLink()}
        alt={string.gitHubTitle()}/>
    </div>
  </footer>
)

export default BottomBar;
