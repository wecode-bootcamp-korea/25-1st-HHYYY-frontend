import React, { Component } from 'react';
import { API } from '../../../config.js';

class ProductFilter extends Component {
  constructor() {
    super();
    this.state = {
      sorting: [],
    };
  }

  sortingSoon = () => {
    fetch(`${API.PRODUCT_DETAIL}?sort=low_price`)
      .then(res => res.json())
      .then(sortingInfo =>
        this.setState({
          sorting: sortingInfo.product_info,
        })
      );
  };

  render() {
    const { navMenuInfo } = this.props;
    return (
      <div className="selectType">
        <p className="productLength">
          총 {navMenuInfo.category_products_count}개
        </p>
        <ul className="productFilter">
          <li className="filterList" onClick={this.sortingSoon()}>
            최신순
          </li>
          <li className="filterList">리뷰 많은 순</li>
          <li className="filterList">낮은 가격순</li>
          <li className="filterList">높은 가격순</li>
        </ul>
      </div>
    );
  }
}

export default ProductFilter;
