import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends Component {
  render() {
    const { navMenuInfo } = this.props;
    return (
      <div className="listCategoryWrap">
        <h2 className="categoryName">{navMenuInfo.category_name}</h2>
        <ul className="listCategory">
          {navMenuInfo.sub_categories?.map(subInfo => {
            return (
              <li className="list">
                <Link to={`/product-category/${subInfo.sub_category_id}`}>
                  {subInfo.sub_category_name} &#40;
                  {subInfo.sub_category_products_count}&#41;
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductNav;
