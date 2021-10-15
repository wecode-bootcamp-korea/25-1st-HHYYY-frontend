import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultProductCard.scss';

class ResultProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <Link to={`/product-detail/${products.id}`} className="ResultProductCard">
        <div className="productImg">
          <img alt={products.name} src={products.thumbnail_url} />
        </div>
        <p className="productName resultName">{products.name}</p>
        <p className="productTag resultTag">
          #{products.tags[0]} #{products.tags[1]}
        </p>
        <p className="productPrice resultPrice">₩ {products.price}</p>
      </Link>
    );
  }
}

export default ResultProductCard;
