import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="allProductList">
        <div className="listCategoryWrap">
          <h2 className="categoryName">베스트</h2>
          <div className="filterSort">추천순</div>
          <ul className="listCategory">
            <li className="list">전체</li>
            <li className="list">주간 베스트</li>
            <li className="list">별 다섯 개 후기</li>
            <li className="list">온라인 전용</li>
            <li className="list">국내제조</li>
            <li className="list">네이키드</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
