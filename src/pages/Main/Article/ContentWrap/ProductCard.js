import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="productCard">
        <div className="productImg">
          <img src={products.thumbnail_image} />
        </div>
        <p className="productName">{products.name}</p>
        <p className="productTag">{products.tags}</p>
        <p className="productPrice">₩ {products.price}</p>
      </div>
    );
  }
}

export default ProductCard;
