import React, { Component } from 'react';

class ProductFilter extends Component {
  render() {
    return (
      <div className="selectType">
        <p className="productLength">총 1234개</p>
        <ul className="productFilter">
          <li className="filterList">추천순</li>
          <li className="filterList">신상품순</li>
          <li className="filterList">인기상품순</li>
          <li className="filterList">혜택순</li>
          <li className="filterList">낮은 가격순</li>
          <li className="filterList">높은 가격순</li>
        </ul>
      </div>
    );
  }
}

export default ProductFilter;
