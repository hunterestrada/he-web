
import React from 'react';

import * as style from 'managers/style.js'
import { AboutDetailView as string } from 'managers/string.js';
import './AboutDetailView.css';

const NAME_TEXT_COMPONENT = 'TextComponent';
const NAME_VIEW_DETAIL_ABOUT = style.getContentComponentClassName([
  'AboutDetailView'
]);

const AboutDetailView = () => (
  <div className={NAME_VIEW_DETAIL_ABOUT}>
    <div className={style.NAME_CARD}>
      <h1 className={NAME_TEXT_COMPONENT}>
        {string.title()}
      </h1>
      <h2 className={NAME_TEXT_COMPONENT}>
        {string.subtitle()}
      </h2>
      <h2 className={NAME_TEXT_COMPONENT}>
        {string.detail()}
      </h2>
      <a className={NAME_TEXT_COMPONENT} href={string.emailLink()}>
        {string.emailAddress()}
      </a>
    </div>
  </div>
)

export default AboutDetailView
