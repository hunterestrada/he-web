
import React from 'react';
import { Link } from 'react-router-dom';

import * as style from 'managers/style.js'

import './ArticleListItem.css';

const NAME_ITEM_LIST_ARTICLE = style.getClassName([
  style.NAME_CARD, 'ArticleListItem'
]);

const NAME_VIEW_TITLE = 'TitleView';
const NAME_VIEW_DETAIL = 'DetailView';

const ArticleListItem = ({route, title, detail}) => (
  <div className={NAME_ITEM_LIST_ARTICLE}>
    <Link  to={route}>
      <h2 className={NAME_VIEW_TITLE}>{title}</h2>
      <h3 className={NAME_VIEW_DETAIL}>{detail}</h3>
    </Link>
  </div>
)

export default ArticleListItem;
