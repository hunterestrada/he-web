
import React from 'react'

import './SocialIcon.css'

const NAME_ICON_SOCIAL = 'SocialIcon'
const NAME_ICON_SOCIAL_IMAGE = 'SocialIconImage'
const TARGET_TAB = "_tab";

const SocialIcon = ({href, alt, src}) => (
  <a className={NAME_ICON_SOCIAL} href={href} target={TARGET_TAB}>
    <img className={NAME_ICON_SOCIAL_IMAGE} src={src} alt={alt}/>
  </a>
)

export default SocialIcon
