import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ContentWrap.scss';

class ContentWrap extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.7.141:8000/products?category=3')
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
          <img
            alt="pink beach"
            src="./images/main/banner/middle/pinkbeach.jpg"
          />
        </div>
      </article>
    );
  }
}

export default ContentWrap;
