
import React from 'react';

import * as style from 'constants/style.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = style.getContentComponentClassName([
  'AdminArticleTableView'
]);

class AdminArticleTableView extends React.Component {

  render() {
    return (
      <div className={NAME_VIEW_TABLE_ARTICLE_ADMIN}>
      </div>
    )
  }

}

export default AdminArticleTableView
