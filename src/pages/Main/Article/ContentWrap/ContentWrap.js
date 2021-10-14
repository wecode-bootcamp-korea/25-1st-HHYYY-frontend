import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ContentWrap.scss';
import { API } from '../../../../../src/config.js';

class ContentWrap extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch(`${API.SEARCH_RESULT}?category=1&offset=1&limit=4`)
      .then(res => res.json())
      .then(itemData =>
        this.setState({
          categoryList: itemData.products_list,
        })
      );
  }

  render() {
    const { categoryList } = this.state;
    return (
      <article className="contentWrap">
        <header className="productWrap">
          <h2 className="productWrap_text">나만 알고 싶은 향기</h2>
          <div className="productsList">
            {categoryList.map(product => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        </header>
        <div className="bannerRolling">
          <img alt="pink beach" src="/images/main/banner/middle/soap.jpg" />
        </div>
      </article>
    );
  }
}

export default ContentWrap;
