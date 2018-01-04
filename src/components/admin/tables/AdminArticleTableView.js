
import React from 'react';

import { AdminArticleTableView as string } from 'managers/string.js'
import * as api from 'managers/api.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = 'AdminArticleTableView';
const NAME_TABLE_DATA = 'DataTable';
const NAME_TABLE_DATA_HEADER = 'DataTableHeader';
const NAME_TABLE_DATA_ROW = 'DataTableRow';
const NAME_TABLE_DATA_CELL = 'DataTableCell';

class AdminArticleTableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: props.articleList || []
    };
  }

  componentDidMount() {
    if (this.state.articleList.length > 0) {
      return;
    }
    api.getArticleList().then(
      json => this.setState({
        articleList: json.data
      })
    )
  }

  render() {
    return (
      <div className={NAME_VIEW_TABLE_ARTICLE_ADMIN}>
        <h1>
          {string.title()}
        </h1>
        <div className={NAME_TABLE_DATA}>
          <div className={NAME_TABLE_DATA_HEADER}>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleSlug()}
            </span>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleTitle()}
            </span>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleDetail()}
            </span>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleContent()}
            </span>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleUpdated()}
            </span>
            <span className={NAME_TABLE_DATA_CELL}>
              {string.articleCreated()}
            </span>
          </div>
          {
            this.state.articleList.map(article => (
              <div className={NAME_TABLE_DATA_ROW}>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.slug}
                </span>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.title}
                </span>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.detail}
                </span>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.content}
                </span>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.updated}
                </span>
                <span className={NAME_TABLE_DATA_CELL}>
                  {article.created}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

}

export default AdminArticleTableView
