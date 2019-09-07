import React from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Error from 'Pages/error/Error'
import Login from 'Pages/login/Login'
import Profile from 'Pages/profile/Profile'
import SignUp from 'Pages/signup/Signup'
import Home from 'Pages/home/Home'
import Intelligent from 'Pages/intelligent/Intelligent'
import Smart from 'Pages/smart/Smart'
import Butler from 'Pages/butler/Butler'
import Contact from 'Pages/contact/Contact'

const history = createBrowserHistory()

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
)

export default AppRouter
