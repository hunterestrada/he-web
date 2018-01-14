
import React from 'react';
import { Link } from 'react-router-dom';

import * as style from 'managers/style.js'

import './ArticleListItem.css';


const NAME_ITEM_LIST_ARTICLE = style.getClassName([
  style.NAME_CARD, 'ArticleListItem'
]);
const NAME_VIEW_LINE = style.getClassName([
  style.NAME_LINE_HORIZONTAL, 'LineView'
]);

const NAME_VIEW_DATE = 'DateView';
const NAME_VIEW_DETAIL = 'DetailView';
const NAME_VIEW_TITLE = 'TitleView';


const ArticleListItem = ({route, title, detail, date}) => (
  <Link to={route}>
    <div className={NAME_ITEM_LIST_ARTICLE}>
      <h1 className={NAME_VIEW_TITLE}>
        {title}
      </h1>
      <h3 className={NAME_VIEW_DETAIL}>
        {detail}
      </h3>
      <div className={NAME_VIEW_LINE} />
      <h5 className={NAME_VIEW_DATE}>
        {date}
      </h5>
    </div>
  </Link>
)

export default ArticleListItem;
