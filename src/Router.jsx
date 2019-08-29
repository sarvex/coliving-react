import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Blog from 'views/BlogPostPage/BlogPostPage';
import Posts from 'views/BlogPostsPage/BlogPostsPage';
import Components from 'views/ComponentsPage/ComponentsPage';
import ContactUs from 'views/ContactUsPage/ContactUsPage';
import ECommerce from 'views/ECommercePage/ECommercePage';
import Landing from 'views/LandingPage/LandingPage';
import Login from 'views/LoginPage/LoginPage';
import Presentation from 'views/PresentationPage/PresentationPage';
import Pricing from 'views/PricingPage/PricingPage';
import Profile from 'views/ProfilePage/ProfilePage';
import Product from 'views/ProductPage/ProductPage';
import Sections from 'views/SectionsPage/SectionsPage';
import Cart from 'views/ShoppingCartPage/ShoppingCartPage';
import SignUp from 'views/SignupPage/SignupPage';
import Error from 'views/ErrorPage/ErrorPage';
import About from 'views/AboutUsPage/AboutUsPage';

import Home from 'pages/home/Home';
import Intelligent from 'pages/intelligent/Intelligent';
import Smart from 'pages/smart/Smart';
import Butler from 'pages/butler/Butler';
import Contact from 'pages/contact/Contact';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />
      <Route path='/posts' component={Posts} />
      <Route path='/components' component={Components} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/ecommerce' component={ECommerce} />
      <Route path='/landing' component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/profile' component={Profile} />
      <Route path='/product' component={Product} />
      <Route path='/sections' component={Sections} />
      <Route path='/cart' component={Cart} />
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
