import React, { Component } from 'react';
import Header from '../../components/Header/Header';
// import EmptyCart from './EmptyCart';
import OrderTable from './OrderTable';

import './cart.scss';
import './orderTable.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmptyCart: false,
    };
  }

  handleCart = () => {
    const { isEmptyCart } = this.state;
    this.setState({ isEmptyCart: !isEmptyCart });
  };

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
          {/* <EmptyCart /> */}
          {!isEmptyCart && <OrderTable />}
        </article>
      </>
    );
  }
}

export default Cart;
