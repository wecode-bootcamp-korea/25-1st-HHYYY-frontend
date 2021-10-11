import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DecideBtns from './component/DecideBtns';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartListData.json')
      .then(res => res.json())
      .then(data => this.setState({ cartList: data }));
  }

  render() {
    return (
      <>
        <section className="orderPage">
          <form className="cartForm">
            <div className="emptyCart">
              <h2>제품</h2>
            </div>
            <table className="addCart">
              <thead>
                <tr>
                  <th width="10%">
                    <span>
                      <input type="checkbox"></input>
                    </span>
                  </th>
                  <th width="40%">제품정보</th>
                  <th width="15%">수량</th>
                  <th width="10%">금액</th>
                  <th width="7%">복지혜택</th>
                  <th width="10%">합계금액</th>
                  <th width="10%">배송비</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                </td>
                <td className="productSpec">
                  <img alt="productImg" src="/images/productImg/main2.png" />
                  <div>
                    <Link to="#">스노우페어리</Link>
                    <p>샤워</p>
                  </div>
                </td>
                <td>
                  <span className="countBox">
                    <button>
                      <i className="fas fa-minus fa-xs" />
                    </button>
                    <input type="text" name="count" className="productCount" />
                    <button>
                      <i className="fas fa-plus fa-xs" />
                    </button>
                  </span>
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
                  <span className="deliveryFee">₩ 2,500</span>
                  <span className="deliveryFee">(택배)</span>
                </td>
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
        <section className="CartBtnBox">
          <div className="deleteProduct">
            <button className="deleteBtn">삭제하기</button>
          </div>
          <DecideBtns />
        </section>
      </>
    );
  }
}

export default Cart;
