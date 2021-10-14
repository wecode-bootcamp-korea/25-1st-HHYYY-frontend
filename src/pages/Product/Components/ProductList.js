import React, { Component } from 'react';
import ProductFilter from './ProductFilter';
import ProductCard from '../../Main/Article/ContentWrap/ProductCard';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const { productData } = this.props;
    return (
      <>
        <div className="productsWrap">
          <ProductFilter />
          <div className="prdList">
            {/* 플렉스에서 줄바꿈하는 방법 찾기 - width값을 주고 프로덕트카드에 위드값이 딱 4등분한 정도 넓이면 된다. */}
            {productData.map(product => (
              <ProductCard products={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
