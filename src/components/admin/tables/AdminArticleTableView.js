
import React from 'react';

import { AdminArticleTableView as string } from 'managers/string.js'
import * as api from 'managers/api.js'
import * as style from 'managers/style.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = 'AdminArticleTableView';

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
        <h1>{string.title()}</h1>
        <table>
          <thead>
            <tr>
                <th>{string.articleSlug()}</th>
                <th>{string.articleTitle()}</th>
                <th>{string.articleDetail()}</th>
                <th>{string.articleContent()}</th>
                <th>{string.articleUpdated()}</th>
                <th>{string.articleCreated()}</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.articleList.map(article => (
                <tr>
                  <td>{article.slug}</td>
                  <td>{article.title}</td>
                  <td>{article.detail}</td>
                  <td>{article.content}</td>
                  <td>{article.updated}</td>
                  <td>{article.created}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default AdminArticleTableView
