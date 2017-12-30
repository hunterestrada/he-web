
import React from 'react';

import * as style from 'constants/style.js'
import { AboutDetailView as string } from 'constants/string.js';
import './AboutDetailView.css';

const NAME_VIEW_DETAIL_ABOUT = style.getContentComponentClassName(['AboutDetailView']);

const AboutDetailView = () => (
  <div className={NAME_VIEW_DETAIL_ABOUT}>
    <h1>{string.title()}</h1>
    <h2>{string.subtitle()}</h2>
    <h2>{string.detail()}</h2>
    <a href={string.emailLink()}>
      {string.emailAddress()}
    </a>
  </div>
)

export default AboutDetailView
