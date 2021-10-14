import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="productCard">
        <Link to={`/product-detail/${products.id}`}>
          <div className="productImg">
            <img src={products.thumnbail_url} alt={products.name} />
          </div>
        </Link>
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
