
import React from 'react';
import BadRouteView from 'components/errors/BadRouteView'

import * as api from 'managers/api.js'
import * as style from 'managers/style.js'
import * as text from 'managers/text.js'
import { ArticleDetailView as string } from 'managers/string.js'

import './ArticleDetailView.css'

const HTTPStatusCode = require('http-status-codes');

const NAME_VIEW_DETAIL_ARTICLE = style.getContentComponentClassName([
  'ArticleDetailView'
]);
const NAME_VIEW_LINE = style.getClassName([
  style.NAME_LINE_HORIZONTAL, 'LineView'
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
        case HTTPStatusCode.NOT_FOUND:
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
          <div className={NAME_VIEW_LINE} />
          <div className={NAME_VIEW_TEXT}
            dangerouslySetInnerHTML={
              {
                __html: text.getHTML(this.state.article.content)
              }
            }
          />
          <div className={NAME_VIEW_LINE}/>
          {this.getDateView()}
        </div>
      </div>
    );
  }

  getDateView = () => {
    const created = this.state.article.created;
    const updated = this.state.article.updated;
    if (created !== updated) {
      return (
        <div>
          <h5 className={NAME_VIEW_TEXT}>
            {string.getFormattedCreatedDate(this.state.article.created)}
          </h5>
          <h5 className={NAME_VIEW_TEXT}>
            {string.getFormattedUpdatedDate(this.state.article.updated)}
          </h5>
        </div>
      );
    }
    return (
      <h5 className={NAME_VIEW_TEXT}>
        {string.getFormattedCreatedDate(this.state.article.created)}
      </h5>
    );
  }

}

export default ArticleDetailView
