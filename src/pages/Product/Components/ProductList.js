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
          <ProductFilter products={productData} />
          <div className="prdList">
            {productData.map((product, idx) => (
              <ProductCard key={idx} products={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
