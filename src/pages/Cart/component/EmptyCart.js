import React, { Component } from 'react';

class EmptyCart extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default EmptyCart;
