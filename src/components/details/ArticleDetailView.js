
import React from 'react';

import * as api from 'managers/api.js'
import * as style from 'managers/style.js'
import * as type from 'managers/type.js'
import BadRouteView from 'components/errors/BadRouteView'
import './ArticleDetailView.css'

const MARK = require('commonmark');
const HTTP_STATUS = require('http-status-codes');

const contentReader = new MARK.Parser();
const contentWriter = new MARK.HtmlRenderer();

const NAME_VIEW_DETAIL_ARTICLE = style.getContentComponentClassName(['ArticleDetailView']);
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
    if (this.props.article === undefined) {
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
    const rawContent = this.state.article.content;
    const parsedContent = contentReader.parse(
      type.isString(rawContent) ? rawContent : ''
    );
    const renderedContent = contentWriter.render(
      parsedContent
    );
    return (
      <div className={NAME_VIEW_DETAIL_ARTICLE}>
        <h1 className={NAME_VIEW_TEXT}>
          {this.state.article.title}
        </h1>
        <h3 className={NAME_VIEW_TEXT}>
          {this.state.article.detail}
        </h3>
        <div className={NAME_VIEW_TEXT}
          dangerouslySetInnerHTML={
            {
              __html: renderedContent
            }
          }
        />
      </div>
    );
  }

}

export default ArticleDetailView
