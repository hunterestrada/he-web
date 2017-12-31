
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AboutDetailView from 'components/details/AboutDetailView'
import AdminArticleTableView from 'components/admin/tables/AdminArticleTableView'
import AdminSignInView from 'components/admin/credentials/AdminSignInView'
import AdminSignUpView from 'components/admin/credentials/AdminSignUpView'
import ArticleDetailView from 'components/details/ArticleDetailView'
import ArticleListView from 'components/lists/ArticleListView'
import BadRouteView from 'components/errors/BadRouteView'
import BottomBar from 'components/bars/BottomBar'
import TopBar from 'components/bars/TopBar'

import * as api from 'managers/api.js'
import * as route from 'managers/route.js'
import * as style from 'managers/style.js'

import './App.css';


const NAME_APP = 'App'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    }
  }

  componentDidMount() {
    api.getArticleList().then(
      json => this.setState({
        articleList: json.data
      })
    )
  }

  render() {
    return (
        <div className={NAME_APP}>
          <TopBar/>
          <div className={style.NAME_CONTENT}>
            <Switch>
              <Route exact path={route.ABOUT}
                component={AboutDetailView}/>
              <Route exact path={route.ADMIN_ARTICLES}
                component={AdminArticleTableView}/>
              <Route exact path={route.ADMIN_SIGN_IN}
                component={AdminSignInView}/>
              <Route exact path={route.ADMIN_SIGN_UP}
                component={AdminSignUpView}/>
              <Route exact path={route.ARTICLES}
                render={
                  (props) => (
                    <ArticleListView props
                      articleList={this.state.articleList}/>
                  )
                }/>
              <Route exact path={route.ARTICLE}
                render={
                  (props) => (
                      <ArticleDetailView props/>
                  )
                }/>
              <Route component={BadRouteView}/>
            </Switch>
          </div>
          <BottomBar/>
        </div>
    );
  }

}

export default App;
