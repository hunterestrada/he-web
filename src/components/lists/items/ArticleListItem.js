
import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleListItem.css';

const NAME_ITEM_LIST_ARTICLE = 'ArticleListItem';

const ArticleListItem = ({route, title, detail}) => (
  <Link className={NAME_ITEM_LIST_ARTICLE} to={route}>
    <h2>{title}</h2>
    <h3>{detail}</h3>
  </Link>
)

export default ArticleListItem;
