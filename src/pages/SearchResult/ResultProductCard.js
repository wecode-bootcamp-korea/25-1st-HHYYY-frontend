import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultProductCard.scss';

class ResultProductCard extends Component {
  render() {
    const { products } = this.props;

    return (
      <Link to={`/product-detail/${products.id}`} className="productCard">
        <div className="productImg">
          <img alt={products.name} src={products.thumbnail_url} />
        </div>
        <p className="productName">{products.name}</p>
        <p className="productTag">
          #{products.tags[0]} #{products.tags[1]}
        </p>
        <p className="productPrice">₩ {products.price}</p>
      </Link>
    );
  }
}

export default ResultProductCard;
