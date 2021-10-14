import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends Component {
  render() {
    const { navInfo } = this.props;
    return (
      <div className="listCategoryWrap">
        <h2 className="categoryName">{navInfo.category_name}</h2>
        <ul className="listCategory">
          <li className="list">
            <Link to="#">페이스</Link>
          </li>
          <li className="list">
            <Link to="#">클렌저</Link>
          </li>
          <li className="list">
            <Link to="#">토너</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductNav;
