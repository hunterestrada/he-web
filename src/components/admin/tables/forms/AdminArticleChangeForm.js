
import React from 'react';

import * as api from 'managers/api.js'
import * as form from 'managers/form.js'
import * as type from 'managers/type.js'
import { AdminArticleChangeForm as string } from 'managers/string.js'

import './AdminArticleChangeForm.css'

const NAME_TABLE_DATA_ROW = 'DataTableRow';
const NAME_TABLE_DATA_CELL = 'DataTableCell';

class AdminArticleChangeForm extends React.Component {

  constructor(props) {
    super(props);
    this.article = this.props.article || {};
    this.state = this.getCleanState();
  }

  getCleanState = () => {
    return {
      slug: this.article.slug || '',
      title: this.article.title || '',
      detail: this.article.detail || '',
      content: this.article.content || ''
    }
  }

  render() {
    return (
      <form className={NAME_TABLE_DATA_ROW}
        onSubmit={this.onUserTapSubmit}>
        <span className={NAME_TABLE_DATA_CELL}>
          <input type={form.TYPE_INPUT_TEXT}
            value={this.state.slug}
            onChange={this.onUserEditSlug}>
          </input>
        </span>
        <span className={NAME_TABLE_DATA_CELL}>
          <input type={form.TYPE_INPUT_TEXT}
            value={this.state.title}
            onChange={this.onUserEditTitle}>
          </input>
        </span>
        <span className={NAME_TABLE_DATA_CELL}>
          <input type={form.TYPE_INPUT_TEXT}
            value={this.state.detail}
            onChange={this.onUserEditDetail}>
          </input>
        </span>
        <span className={NAME_TABLE_DATA_CELL}>
          <textarea value={this.state.content}
            onChange={this.onUserEditContent}>
          </textarea>
        </span>
        <span className={NAME_TABLE_DATA_CELL}>
          {
            AdminArticleChangeForm
              .getFormatted(this.article.updated)
          }
        </span>
        <span className={NAME_TABLE_DATA_CELL}>
        {
          AdminArticleChangeForm
            .getFormatted(this.article.created)
        }
        </span>
        {this.getUpdateArticleButton()}
        {
          (this.article.id) ?
            this.getRemoveArticleButton() : this.getCreateArticleButton()
        }
      </form>
    )
  }

  getCreateArticleButton = () => {
    if (this.article.id) {
      return (<span className={NAME_TABLE_DATA_CELL}/>);
    }
    return (
      <span className={NAME_TABLE_DATA_CELL}>
        <button onClick={this.onUserTapCreateArticle}>
          {string.create()}
        </button>
      </span>
    )
  }

  getUpdateArticleButton = () => {
    if (!this.article.id) {
      return (<span className={NAME_TABLE_DATA_CELL}/>);
    }
    return (
      <span className={NAME_TABLE_DATA_CELL}>
        <button onClick={this.onUserTapUpdateArticle}>
          {string.update()}
        </button>
      </span>
    )
  }

  getRemoveArticleButton = () => {
    if (!this.article.id) {
      return (<span className={NAME_TABLE_DATA_CELL}/>);
    }
    return (
      <span className={NAME_TABLE_DATA_CELL}>
        <button onClick={this.onUserTapRemoveArticle}>
          {string.remove()}
        </button>
      </span>
    )
  }

  onUserEditSlug = (event) => {
    const validatedSlug = (
      event.target.value || ''
    ).trim().toLowerCase();
    this.setState({
      slug: validatedSlug
    });
  }

  onUserEditTitle = (event) => {
    this.setState({
      title: event.target.value || ''
    });
  }

  onUserEditDetail = (event) => {
    this.setState({
      detail: event.target.value || ''
    });
  }

  onUserEditContent = (event) => {
    this.setState({
      content: event.target.value || ''
    });
  }

  onUserTapCreateArticle = (event) => {
    event.preventDefault()
    api.postArticle(
      this.state
    ).then(json => {
      this.props.onUserCreateArticle(json.data)
      this.setState(this.getCleanState())
    }).catch(error => {
      if (error.statusText) {
        alert(error.statusText)
      }
    });
  }

  onUserTapUpdateArticle = (event) => {
    event.preventDefault();
    api.putArticle(
      this.article.id, this.state
    ).then(json => {
      this.article = json.data
      this.setState(this.getCleanState());
    }).catch(error => {
      if (error.statusText) {
        alert(error.statusText);
      }
    });
  }

  onUserTapRemoveArticle = (event) => {
    event.preventDefault();
    api.deleteArticle(
      this.article.id
    ).then(json =>
      this.props.onUserRemoveArticle(this.article)
    ).catch(error => {
      if (error.statusText) {
        alert(error.statusText);
      }
    })
  }

  static getFormatted(dateText) {
    if (!type.isString(dateText)) {
      return "";
    }
    return new Date(dateText).toLocaleString();
  }

}

export default AdminArticleChangeForm
