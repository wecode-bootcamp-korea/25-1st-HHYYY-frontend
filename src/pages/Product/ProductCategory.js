import React, { Component } from 'react';
import ProductTitle from './Components/ProductTitle';
import ProductList from './Components/ProductList';
import ProductNav from './Components/ProductNav';
import './ProductCategory.scss';

class ProductCategory extends Component {
  render() {
    return (
      <>
        {/* 상위 컴포넌트 */}
        <ProductTitle />
        <section className="productSection">
          {/* 상품 하위 카테고리 */}
          <ProductNav />
          {/*상품 분류*/}
          <ProductList />
        </section>
      </>
    );
  }
}

export default ProductCategory;
