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
      `http://10.58.6.213:8000/products?category=${this.props.match.params.id}&offset=0&limit=10`
    )
      .then(res => res.json())
      .then(listData =>
        this.setState({
          categoryInfo: listData,
        })
      );
  }

  render() {
    const { categoryInfo } = this.state;
    return (
      <>
        <div className="categoryTitle">
          <p className="subBigText">{categoryInfo.name}</p>
          <p className="subSmallText">{categoryInfo.description}</p>
          <img
            alt="product List img"
            src={categoryInfo.category_image}
            className="subImg"
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
