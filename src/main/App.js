
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

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
import * as cache from 'managers/cache.js'
import * as route from 'managers/route.js'
import * as style from 'managers/style.js'

import './App.css';


const NAME_APP = 'App'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      isAuthenticated: cache.getIsAuthenticated()
    }
    this.attemptSigningInUser = this.attemptSigningInUser.bind(this);
  }

  render() {
    return (
        <div className={NAME_APP}>
          <TopBar/>
          <div className={style.NAME_CONTENT}>
            <Switch>
              <Route exact path={route.ABOUT}
                component={AboutDetailView}/>
              <Route exact path={route.ADMIN_ARTICLE_TABLE}
                component={AdminArticleTableView}/>
              <Route exact path={route.ADMIN}
                render={
                  props => {
                    if (this.state.isAuthenticated) {
                      return <Redirect to={route.ADMIN_ARTICLE_TABLE}/>
                    }
                    return <Redirect to={route.ADMIN_SIGN_IN}/>
                  }
                }/>
              <Route exact path={route.ADMIN_SIGN_IN}
                render={
                  props => {
                    if (this.state.isAuthenticated) {
                      return <Redirect to={route.ADMIN_ARTICLE_TABLE}/>
                    }
                    return (
                      <AdminSignInView props
                        attemptSigningInUser={this.attemptSigningInUser}/>
                    )
                  }
                }/>
              <Route exact path={route.ADMIN_SIGN_UP}
                component={AdminSignUpView}/>
              <Route exact path={route.ARTICLES}
                component={ArticleListView}/>
              <Route exact path={route.ARTICLE + route.PATH_KEY_ARTICLE}
                render={
                  props => (
                      <ArticleDetailView props
                        articleKey={props.match.params.articleKey}/>
                  )
                }/>
              <Route component={BadRouteView}/>
            </Switch>
          </div>
          <BottomBar/>
        </div>
    );
  }

  attemptSigningInUser(validatedEmail, validatedPassword) {
    api.postSignInToken(
      validatedEmail, validatedPassword
    ).then(
      value => {
        cache.setIsAuthenticated(true);
        this.setState({
          isAuthenticated: true
        });
      }
    ).catch(
      error => {
        console.log(error);
        if (error.status) {
          alert(error.status);
        }
      }
    )
  }

}

export default App;
