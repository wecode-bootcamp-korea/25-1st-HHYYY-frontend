import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import DecideBtns from './component/DecideBtns';

class OrderComplete extends Component {
  render() {
    return (
      <>
        <Header />
        <article className="Cart">
          <header>
            <h1>SHOPPING CART</h1>
            <div className="orderProgress">
              <span className="outPorgress">Cart</span>
              <span>
                <i className="fas fa-angle-right" />
              </span>
              <span className="inPorgress">Order Confirmed</span>
            </div>
          </header>
          <section className="orderComplete">
            <div className="lushLogo">
              <img alt="LogoImg" src="/images/productImg/test.png" />
            </div>
            <div className="orderComment">
              <strong>주문이 완료되었습니다.</strong>
              <span>고객님의 주문이 정상적으로 완료되었습니다.</span>
              <p>상세 주문내역 및 진행 상황은</p>
              <p>
                <em>마이페이지 &gt; 내주문</em>에서 확인하실 수 있습니다.
              </p>
            </div>
          </section>
          <DecideBtns />
        </article>
      </>
    );
  }
}

export default OrderComplete;
