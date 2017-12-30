
import React from 'react';

import * as name from 'constants/name.js'
import './AdminArticleTableView.css'

const NAME_VIEW_TABLE_ARTICLE_ADMIN = name.getContentClassName([
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
