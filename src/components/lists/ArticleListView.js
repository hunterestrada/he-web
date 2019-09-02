
import React from 'react';

import ArticleListItem from './items/ArticleListItem';

import * as cache from 'managers/cache.js'
import * as style from 'managers/style.js'
import * as route from 'managers/route.js'
import { ArticleListView as string } from 'managers/string.js'

import './ArticleListView.css'


const NAME_VIEW_LIST_ARTICLE = style.getContentComponentClassName(['ArticleListView']);

class ArticleListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: cache.getArticleList(),
      didLoadData: false
    };
  }

  componentDidMount() {
    this.setState({
      didLoadData: true
    });
    // if (this.state.articleList.length > 0) {
    //   return;
    // }
    // api.getArticleList().then(json => {
    //   this.setState({
    //     articleList: json.data,
    //     didLoadData: true
    //   });
    // });
  }

  render() {
    if (this.state.didLoadData && this.state.articleList.length === 0) {
      return (
        <div className={NAME_VIEW_LIST_ARTICLE}>
          <ul>
            <ArticleListItem
              route={''}
              title={string.emptyArticleListTitle()}
              detail={''}
              date={''}
            />
          </ul>
        </div>
      )
    }
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
