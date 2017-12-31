
import React from 'react';

import * as style from 'managers/style.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = style.getContentComponentClassName([
  'AdminArticleTableView'
]);

class AdminArticleTableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: props.articleList || []
    };
  }

  render() {
    return (
      <table className={NAME_VIEW_TABLE_ARTICLE_ADMIN}>

      </table>
    )
  }

}

export default AdminArticleTableView
