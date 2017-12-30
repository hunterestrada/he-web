
import React from 'react'

import SocialIcon from 'components/icons/SocialIcon.js'

import { BottomBar as string } from 'constants/string.js'
import * as name from 'constants/name.js'

import './Bar.css'
import './BottomBar.css'

const NAME_BAR_BOTTOM = name.getClassName([
  'Bar', 'BottomBar'
]);

const BottomBar = () => (
  <footer className={NAME_BAR_BOTTOM}>
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
  </footer>
)

export default BottomBar;
