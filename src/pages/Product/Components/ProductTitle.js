import React, { Component } from 'react';

class ProductTitle extends Component {
  render() {
    return (
      <div className="categoryTitle">
        <p className="subBigText">베스트</p>
        <p className="subSmallText">누구나 좋아하는 인기 제품을 만나 보세요!</p>
        <img
          className="subImg"
          src="./images/main/banner/middle/banner05.jpg"
          alt="product List img"
        />
      </div>
    );
  }
}

export default ProductTitle;
