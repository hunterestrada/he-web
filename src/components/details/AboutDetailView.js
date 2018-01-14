
import React from 'react';

import * as style from 'managers/style.js'
import { AboutDetailView as string } from 'managers/string.js';
import './AboutDetailView.css';

const NAME_VIEW_TEXT = 'TextView';
const NAME_LAYOUT_IMAGE = 'ImageLayout';
const NAME_VIEW_IMAGE = 'ImageView';
const NAME_VIEW_DETAIL_ABOUT = style.getContentComponentClassName([
  'AboutDetailView'
]);
const NAME_VIEW_LINE = style.getClassName([
  style.NAME_LINE_HORIZONTAL, 'LineView'
])

const AboutDetailView = () => (
  <div className={NAME_VIEW_DETAIL_ABOUT}>
    <div className={style.NAME_CARD}>
      <h1 className={NAME_VIEW_TEXT}>
        {string.title()}
      </h1>
      <div className={NAME_LAYOUT_IMAGE}>
        <img className={NAME_VIEW_IMAGE}
          src={string.imageLink()}
          alt={string.imageTitle()}
        />
      </div>
      <h2 className={NAME_VIEW_TEXT}>
        {string.subtitle()}
      </h2>
      <h2 className={NAME_VIEW_TEXT}>
        {string.detail()}
      </h2>
      <div className={NAME_VIEW_LINE}/>
      <a className={NAME_VIEW_TEXT}
        href={string.emailLink()}>
        {string.emailAddress()}
      </a>
    </div>
  </div>
)

export default AboutDetailView
