import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DecideBtns extends Component {
  render() {
    return (
      <>
        <div className="decideBtns">
          <button className="goOnShop deco">
            <Link to="/main">쇼핑 계속하기</Link>
          </button>
          <button className="orderBtn deco">
            <Link to="/order-complete">주문하기</Link>
          </button>
        </div>
      </>
    );
  }
}

export default DecideBtns;
