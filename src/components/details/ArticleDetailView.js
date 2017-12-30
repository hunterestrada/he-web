
import React from 'react';

import * as style from 'constants/style.js'
import './ArticleDetailView.css';


const NAME_VIEW_DETAIL_ARTICLE = style.getContentComponentClassName(['ArticleDetailView']);

const ArticleDetailView = ({title, detail, content}) => (
  <div className={NAME_VIEW_DETAIL_ARTICLE}>
    <h1>{title}</h1>
    <h3>{detail}</h3>
    {content}
  </div>
)

export default ArticleDetailView
