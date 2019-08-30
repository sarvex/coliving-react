import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error from 'pages/error/Error';
import Login from 'pages/login/Login';
import Profile from 'pages/profile/Profile';
import SignUp from 'pages/signup/Signup';
import Home from 'pages/home/Home';
import Intelligent from 'pages/intelligent/Intelligent';
import Smart from 'pages/smart/Smart';
import Butler from 'pages/butler/Butler';
import Contact from 'pages/contact/Contact';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
      <Route path='/signup' component={SignUp} />
      <Route path='/error' component={Error} />
      <Route path='/intelligent' component={Intelligent} />
      <Route path='/smart' component={Smart} />
      <Route path='/butler' component={Butler} />
      <Route path='/contact' component={Contact} />
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
