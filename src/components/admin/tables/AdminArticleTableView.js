
import React from 'react'
import { Redirect } from 'react-router-dom'
import AdminArticleChangeForm from './forms/AdminArticleChangeForm'

import { AdminArticleTableView as string } from 'managers/string.js'
import * as api from 'managers/api.js'
import * as cache from 'managers/cache.js'
import * as route from 'managers/route.js'
import * as style from 'managers/style.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = style.getExpandableContentComponentClassName([
  'AdminArticleTableView'
]);
const NAME_TABLE_DATA = 'DataTable';
const NAME_TABLE_DATA_HEADER = 'DataTableHeader';
const NAME_TABLE_DATA_CELL = 'DataTableCell';

class AdminArticleTableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: []
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
    if (!cache.getIsAdminAuthenticated()) {
      return <Redirect to={route.ADMIN_SIGN_IN}/>
    }
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
                {string.articleSubtitle()}
              </span>
              <span className={NAME_TABLE_DATA_CELL}>
                {string.articleSummary()}
              </span>
              <span className={NAME_TABLE_DATA_CELL}>
                {string.articleFile()}
              </span>
              <span className={NAME_TABLE_DATA_CELL}>
                {string.articleUpdated()}
              </span>
              <span className={NAME_TABLE_DATA_CELL}>
                {string.articleCreated()}
              </span>
            </div>
            <AdminArticleChangeForm
              onUserCreateArticle={this.onUserCreateArticle}/>
            {
              this.state.articleList.map(article =>
                <AdminArticleChangeForm
                  key={article.id}
                  article={article}
                  onUserRemoveArticle={this.onUserRemoveArticle}/>
              )
            }
          </div>
        </div>
      </div>
    )
  }

  onUserCreateArticle = (value) => {
    const newArticleList = [value].concat(this.state.articleList);
    this.setState({
      articleList: newArticleList
    });
  }

  onUserRemoveArticle = (value) => {
    const newArticleList = this.state.articleList.filter(article =>
      value.id !== article.id
    );
    this.setState({
      articleList: newArticleList
    });
  }

}

export default AdminArticleTableView
