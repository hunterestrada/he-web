
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AboutDetailView from 'components/details/AboutDetailView'
import AdminArticleTableView from 'components/admin/tables/AdminArticleTableView'
import AdminSignInView from 'components/admin/authentication/views/AdminSignInView'
import AdminSignOutView from 'components/admin/authentication/views/AdminSignOutView'
import AdminSignUpView from 'components/admin/authentication/views/AdminSignUpView'
import ArticleDetailView from 'components/details/ArticleDetailView'
import ArticleListView from 'components/lists/ArticleListView'
import BadRouteView from 'components/errors/BadRouteView'
import BottomBar from 'components/bars/BottomBar'
import TopBar from 'components/bars/TopBar'

import * as route from 'managers/route.js'
import * as style from 'managers/style.js'

import './App.css';


const NAME_APP = 'App'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    }
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
                component={AdminArticleTableView}/>
              <Route exact path={route.ADMIN_SIGN_IN}
                component={AdminSignInView}/>
              <Route exact path={route.ADMIN_SIGN_OUT}
                component={AdminSignOutView}/>
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

}

export default App;
