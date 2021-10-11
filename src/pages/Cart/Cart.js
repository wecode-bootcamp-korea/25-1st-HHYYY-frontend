import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import EmptyCart from './EmptyCart';
import OrderTable from './OrderTable';

import './cart.scss';
import './orderTable.scss';
import './orderComplete.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmptyCart: [], //  백엔드에서 상품값을 가져오면.
    };
  }

  componentDidMount() {
    const { isEmptyCart } = this.state;
    if (isEmptyCart.length > 0) {
      <OrderTable />;
    } else {
      <isEmptyCart />;
    }
    // this.setState({ isEmptyCart: !isEmptyCart });
  }

  render() {
    const { isEmptyCart } = this.state;
    return (
      <>
        <Header />
        <article className="Cart">
          <header>
            <h1>SHOPPING CART</h1>
            <div className="orderProgress">
              <span className="inProgress">Cart</span>
              <span>
                <i className="fas fa-angle-right" />
              </span>
              <span className="outProgress">Order Confirmed</span>
            </div>
          </header>
          {<EmptyCart />}
          {!isEmptyCart && <OrderTable />}
        </article>
      </>
    );
  }
}

export default Cart;
