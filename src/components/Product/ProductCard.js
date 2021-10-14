import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="productCard">
        <div className="productImg">
          <img alt={products.name} src={products.thumbnail_image} />
        </div>
        <p className="productName">{products.name}</p>
        <p className="productTag">
          #{products.tags[0]} #{products.tags[1]}
        </p>
        <p className="productPrice">₩ {products.price}</p>
      </div>
    );
  }
}

export default ProductCard;
