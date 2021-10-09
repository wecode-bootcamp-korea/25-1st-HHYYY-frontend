import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

import './cart.scss';

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <article className="Cart">
          <header>
            <h1>SHOPPING CART</h1>
            <p>Cart</p>
          </header>
          <section>
            <form>
              <h3>제품</h3>
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
          <section>
            <div className="priceBox">
              <p>총</p>
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default Cart;
