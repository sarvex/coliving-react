import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import './App.scss';

import BlogPostPage from './views/BlogPostPage/BlogPostPage';
import BlogPostsPage from './views/BlogPostsPage/BlogPostsPage';
import ComponentsPage from './views/ComponentsPage/ComponentsPage';
import ContactUsPage from './views/ContactUsPage/ContactUsPage';
import ECommercePage from './views/ECommercePage/ECommercePage';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import PresentationPage from './views/PresentationPage/PresentationPage';
import PricingPage from './views/PricingPage/PricingPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ProductPage from './views/ProductPage/ProductPage';
import SectionsPage from './views/SectionsPage/SectionsPage';
import ShoppingCartPage from './views/ShoppingCartPage/ShoppingCartPage';
import SignupPage from './views/SignupPage/SignupPage';
import ErrorPage from './views/ErrorPage/ErrorPage';
import AboutUsPage from './views/AboutUsPage/AboutUsPage';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/about-us' component={AboutUsPage} />
        <Route path='/blog-post' component={BlogPostPage} />
        <Route path='/blog-posts' component={BlogPostsPage} />
        <Route path='/components' component={ComponentsPage} />
        <Route path='/contact-us' component={ContactUsPage} />
        <Route path='/ecommerce-page' component={ECommercePage} />
        <Route path='/landing-page' component={LandingPage} />
        <Route path='/login-page' component={LoginPage} />
        <Route path='/pricing' component={PricingPage} />
        <Route path='/profile-page' component={ProfilePage} />
        <Route path='/product-page' component={ProductPage} />
        <Route path='/sections' component={SectionsPage} />
        <Route path='/shopping-cart-page' component={ShoppingCartPage} />
        <Route path='/signup-page' component={SignupPage} />
        <Route path='/error-page' component={ErrorPage} />
        <Route path='/' component={PresentationPage} />
      </Switch>
    </Router>
  );
}

export default App;
