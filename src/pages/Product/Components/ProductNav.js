import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends Component {
  render() {
    return (
      <div className="listCategoryWrap">
        <h2 className="categoryName">베스트</h2>
        <ul className="listCategory">
          <li className="list">
            <Link to="#">전체</Link>
          </li>
          <li className="list">
            <Link to="#">주간 베스트</Link>
          </li>
          <li className="list">
            <Link to="#">별 다섯 개 후기</Link>
          </li>
          <li className="list">
            <Link to="#">온라인 전용</Link>
          </li>
          <li className="list">
            <Link to="#">국내제조</Link>
          </li>
          <li className="list">
            <Link to="#">네이키드</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductNav;
