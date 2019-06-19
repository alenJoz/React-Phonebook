import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={Login} exact={true}></Route>
        <Route path='/home' component={Home} exact={true}></Route>
      </Switch>
    </Router>

  );
};

export default RouterComponent;