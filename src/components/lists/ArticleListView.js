
import React from 'react';

import ArticleListItem from './items/ArticleListItem';

import * as name from 'constants/name.js';
import * as route from 'constants/route.js';
import './ArticleListView.css';


const NAME_VIEW_LIST_ARTICLE = name.getContentClassName(['ArticleListView']);

const ArticleListView = ({articleList}) => (
  <div className={NAME_VIEW_LIST_ARTICLE}>
    <ul>
      {
        articleList.map(article =>
          <ArticleListItem
            key={article.id}
            route={route.ARTICLE + (article.slug || article.id)}
            title={article.title}
            detail={article.detail}
          />
        )
      }
    </ul>
  </div>
)

export default ArticleListView
