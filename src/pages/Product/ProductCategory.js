import React, { Component } from 'react';
import ProductList from '../../components/Product/ProductCategory/ProductList';
import './ProductCategory.scss';
import '../../components/Product/ProductCategory/ProductList.scss';

class ProductCategory extends Component {
  render() {
    return (
      <section>
        {/* 상위 컴포넌트 */}
        <div className="categoryTitle">
          <p className="subBigText">베스트</p>
          <p className="subSmallText">
            누구나 좋아하는 인기 제품을 만나 보세요!
          </p>
          <img
            className="subImg"
            src="./images/main/banner/middle/banner05.jpg"
            alt="product List img"
          />
        </div>
        {/* 하위 컴포넌트 */}
        <ProductList />
      </section>
    );
  }
}

export default ProductCategory;
