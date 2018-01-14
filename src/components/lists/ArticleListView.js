
import React from 'react';

import ArticleListItem from './items/ArticleListItem';

import { ArticleListView as string} from 'managers/string.js'
import * as style from 'managers/style.js'
import * as route from 'managers/route.js';
import './ArticleListView.css';


const NAME_VIEW_LIST_ARTICLE = style.getContentComponentClassName(['ArticleListView']);

const ArticleListView = ({articleList}) => (
  <div className={NAME_VIEW_LIST_ARTICLE}>
    <ul>
      {
        articleList.map(article =>
          <ArticleListItem key={article.id}
            route={route.ARTICLE + (article.slug || article.id || '')}
            title={article.title || ''}
            detail={article.detail || ''}
            date={string.getFormattedCreatedDate(article.created)}
          />
        )
      }
    </ul>
  </div>
)

export default ArticleListView
