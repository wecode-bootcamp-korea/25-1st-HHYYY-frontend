import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import DecideBtns from './component/DecideBtns';

class OrderComplete extends Component {
  render() {
    return (
      <>
        <Header />
        <article className="cart">
          <header>
            <h1>SHOPPING CART</h1>
            <div className="orderProgress">
              <span className="outProgress">Cart</span>
              <span>
                <i className="fas fa-angle-right" />
              </span>
              <span className="inProgress">Order Confirmed</span>
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
          <section className="CartBtnBox">
            <div className="decideBtns">
              <button className="goOnShop deco">
                <Link to="/main">쇼핑 계속하기</Link>
              </button>
              <button className="orderBtn deco">
                <Link to="/order-complete">주문확인하기</Link>
              </button>
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default OrderComplete;
