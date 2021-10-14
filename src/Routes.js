import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import ProductCategory from './pages/Product/ProductCategory';
import ProductDetail from './pages/Product/ProductDetail';
import Search from './pages/Search/Search';
import SearchResult from './pages/SearchResult/SearchResult';
import SignUp from './pages/Users/SignUp/SignUp';
import SignIn from './pages/Users/SignIn/SignIn';
import Cart from './pages/Cart/Cart';
import OrderComplete from './pages/Cart/OrderComplete';
import NotFound from './pages/Error/NotFound';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route
            exact
            path="/product-category/:id"
            component={ProductCategory}
          />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search-result" component={SearchResult} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order-complete" component={OrderComplete} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
