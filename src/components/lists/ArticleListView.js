
import React from 'react';

import ArticleListItem from './items/ArticleListItem';

import * as api from 'managers/api.js'
import * as cache from 'managers/cache.js'
import * as style from 'managers/style.js'
import * as route from 'managers/route.js'
import { ArticleListView as string} from 'managers/string.js'

import './ArticleListView.css'


const NAME_VIEW_LIST_ARTICLE = style.getContentComponentClassName(['ArticleListView']);

class ArticleListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: cache.getArticleList()
    };
  }

  componentDidMount() {
    if (this.state.articleList.length > 0) {
      return;
    }
    api.getArticleList().then(json => {
      this.setState({
        articleList: json.data
      });
    });
  }

  render() {
    return (
      <div className={NAME_VIEW_LIST_ARTICLE}>
        <ul>
          {
            this.state.articleList.map(article =>
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
    );
  }

}

export default ArticleListView
