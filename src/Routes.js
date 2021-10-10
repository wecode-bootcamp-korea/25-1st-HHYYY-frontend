import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import ProductCategory from './components/Product/ProductCategory';
import ProductDetail from './components/Product/ProductDetail';
import Search from './pages/Search/Search';
import SearchResult from './pages/SearchResult/SearchResult';
import Signup from './pages/Users/SignUp';
import Signin from './pages/Users/SignIn';
import Cart from './pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search-result" component={SearchResult} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
