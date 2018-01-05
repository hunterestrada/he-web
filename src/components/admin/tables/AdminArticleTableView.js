
import React from 'react'
import AdminArticleChangeForm from './forms/AdminArticleChangeForm'

import { AdminArticleTableView as string } from 'managers/string.js'
import * as api from 'managers/api.js'
import * as style from 'managers/style.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = style.getClassName([
  'AdminArticleTableView'
]);
const NAME_TABLE_DATA = 'DataTable';
const NAME_TABLE_DATA_HEADER = 'DataTableHeader';
const NAME_TABLE_DATA_CELL = 'DataTableCell';

class AdminArticleTableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: props.articleList || []
    };
    this.onUserCreateArticle = this.onUserCreateArticle.bind(this);
    this.onUserUpdateArticle = this.onUserUpdateArticle.bind(this);
    this.onUserDeleteArticle = this.onUserDeleteArticle.bind(this);
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
        <div className={style.NAME_CARD}>
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
            <AdminArticleChangeForm/>
            {
              this.state.articleList.map(article =>
                <AdminArticleChangeForm key={article.id}
                  article={article}/>
              )
            }
          </div>
        </div>
      </div>
    )
  }

  onUserCreateArticle(event) {
    event.preventDefault();
    console.log(event);
  }

  onUserUpdateArticle(event) {
    event.preventDefault();
    console.log(event);
  }

  onUserDeleteArticle(event) {
    event.preventDefault();
    console.log(event);
  }

}

export default AdminArticleTableView
