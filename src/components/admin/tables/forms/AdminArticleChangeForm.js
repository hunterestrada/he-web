
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
    this.article = props.article || {};
    this.state = {
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
          <input type={form.TYPE_INPUT_TEXT}
            value={this.state.content}
            onChange={this.onUserEditContent}>
          </input>
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
        <input type={form.TYPE_INPUT_SUBMIT}
          value={
            (this.article.id) ?
              string.update() : string.create()
          }/>
      </form>
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

  onUserTapSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.article.id) {
      api.putArticle(
        this.article.id, this.state
      ).then(value =>
        console.log(value)
      ).catch(error =>
        console.log(error)
      )
    } else {
      api.postArticle(
        this.state
      ).then(value =>
        console.log(value)
      ).catch(error =>
        console.log(error)
      )
    }
  }

  static getFormatted(dateText) {
    if (!type.isString(dateText)) {
      return "";
    }
    return new Date(dateText).toLocaleString();
  }

}

export default AdminArticleChangeForm
