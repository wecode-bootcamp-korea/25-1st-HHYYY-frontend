import React, { Component } from 'react';
import ProductList from './Components/ProductList';
import ProductNav from './Components/ProductNav';
import './ProductCategory.scss';

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryInfo: [],
    };
  }
  componentDidMount() {
    fetch(
      `http://localhost:3000/data/ProductCategory.json/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          categoryInfo: data,
        })
      );
  }

  render() {
    return (
      <>
        <div className="categoryTitle">
          <p className="subBigText">베스트</p>
          <p className="subSmallText">
            누구나 좋아하는 인기 제품을 만나 보세요!
          </p>
          <img
            className="subImg"
            src="./images/main/banner/middle/banner05.jpg"
            alt="product List img"
          />
        </div>
        <section className="productSection">
          {/* 상품 카테고리 Nav */}
          <ProductNav />
          {/*상품 분류*/}
          <ProductList />
        </section>
      </>
    );
  }
}

export default ProductCategory;
