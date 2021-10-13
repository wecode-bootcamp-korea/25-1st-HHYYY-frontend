import React, { Component } from 'react';
import EmptyCart from './component/EmptyCart';
import OrderTable from './component/OrderTable';

import './cart.scss';
import './component/orderTable.scss';
import './orderComplete.scss';
import './component/tableBody.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmptyCart: [], //  백엔드에서 상품값을 가져오면.
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartListData.json')
      .then(res => res.json())
      .then(inCart => {
        this.setState({ isEmptyCart: inCart.cart_list });
      });
  }

  render() {
    const { isEmptyCart } = this.state;
    return (
      <>
        <article className="cart">
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
          {isEmptyCart.length > 0 ? <OrderTable /> : <EmptyCart />}
        </article>
      </>
    );
  }
}

export default Cart;
