import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OrderTable from './OrderTable';

import './cart.scss';

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
        {!isEmptyCart && <OrderTable />}
        <article className="Cart">
          <header>
            <h1>SHOPPING CART</h1>
            <div className="orderProgress">
              <span className="inCart">Cart</span>
              <span>
                <i className="fas fa-angle-right" />
              </span>
              <span className="inOrder">Order Confirmed</span>
            </div>
          </header>
          <section className="orderPage">
            <form className="cartForm">
              <div className="emptyCart">
                <h2>제품</h2>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>장바구니에 담겨있는 상품이 없습니다.</td>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </form>
          </section>
          <section className="priceBox">
            <div className="totalPrice">
              <p>
                총 0 개의 금액 ₩ <strong>0</strong> + 배송비 ₩&nbsp;
                <strong>0</strong> = <em>총 주문금액 </em>
                <span>₩ 0</span>
              </p>
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default Cart;
