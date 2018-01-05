
import React from 'react';
import BadRouteView from 'components/errors/BadRouteView'

import * as api from 'managers/api.js'
import * as style from 'managers/style.js'
import * as text from 'managers/text.js'

import './ArticleDetailView.css'

const HTTP_STATUS = require('http-status-codes');

const NAME_VIEW_DETAIL_ARTICLE = style.getContentComponentClassName([
  'ArticleDetailView'
]);
const NAME_VIEW_TEXT = 'TextView';

class ArticleDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isArticleMissing: false,
      article: props.article || {}
    };
  }

  componentDidMount() {
    if (this.state.article.length > 0) {
      return;
    }
    api.getArticle(
      this.props.articleId
    ).then(json => {
      this.setState({
        article: json.data
      })
    }).catch(error => {
      switch (error.status) {
        case HTTP_STATUS.NOT_FOUND:
          this.setState({
            isArticleMissing: true
          });
          break;
        default:
          console.log(error.status);
          break;
      }

    });
  }

  render() {
    if (this.state.isArticleMissing) {
      return <BadRouteView/>
    }
    return (
      <div className={NAME_VIEW_DETAIL_ARTICLE}>
        <div className={style.NAME_CARD}>
          <h1 className={NAME_VIEW_TEXT}>
            {this.state.article.title}
          </h1>
          <h3 className={NAME_VIEW_TEXT}>
            {this.state.article.detail}
          </h3>
          <div className={NAME_VIEW_TEXT}
            dangerouslySetInnerHTML={
              {
                __html: text.getHTML(this.state.article.content)
              }
            }
          />
        </div>
      </div>
    );
  }

}

export default ArticleDetailView
