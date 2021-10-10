import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

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
    return (
      <>
        <Header />
        <article className="Cart">
          <header>
            <h1>SHOPPING CART</h1>
            <div className="orderProgress">
              <span>Cart</span>
              <span>
                <i className="fas fa-angle-right" />
              </span>
              <span>Order Confirmed</span>
            </div>
          </header>
          <section className="orderPage">
            <form className="cartForm">
              <div className="emptyCart">
                <h2>제품</h2>
              </div>
              <table className="addCart">
                <thead>
                  <tr>
                    <th>
                      <span>
                        <input type="checkbox"></input>
                      </span>
                    </th>
                    <th width="400px">제품정보</th>
                    <th>수량</th>
                    <th>금액</th>
                    <th>복지혜택</th>
                    <th>합계금액</th>
                    <th>배송비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="checkBox">
                      <span>
                        <input type="checkbox" name="cartNo" value="cartNo" />
                        <label for="cartNo"></label>
                      </span>
                    </td>
                    <td class="productImg" rowSpan="2">
                      <span>
                        <Link to="#" />
                        img
                      </span>
                      <div>
                        <Link to="#">제품명</Link>
                      </div>
                    </td>
                    <td rowSpan="2">
                      <div className="count">
                        <button>
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          name="count"
                          className="productCount"
                        ></input>
                        <button>
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>₩ 172,000</strong>
                    </td>
                    <td>
                      <div style={{ width: '40px', height: '100px' }}></div>
                    </td>
                    <td>
                      <strong>₩ 172,000</strong>
                    </td>
                    <td>
                      <span>배송비</span>
                    </td>
                  </tr>
                </tbody>
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
          <section className="payment">
            <div className="deleteProduct">
              <button className="deleteBtn">삭제하기</button>
            </div>
            <div className="decide">
              <button className="goOnShop deco">
                <Link to="/main">쇼핑 계속하기</Link>
              </button>
              <button className="orderBtn deco">
                <Link to="/main">주문하기</Link>
              </button>
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default Cart;
