import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="productCard">
        <div className="productImg">
          <Link to={`/product-detail/${products.id}`}>
            <img src={products.thumbnail_image} alt={products.name} />
          </Link>
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
