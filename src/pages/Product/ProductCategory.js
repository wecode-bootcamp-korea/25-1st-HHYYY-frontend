import React, { Component } from 'react';
import ProductList from './Components/ProductList';
import ProductNav from './Components/ProductNav';
import './ProductCategory.scss';
import { API } from '../../config.js';

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      headerTitle: [],
      productsData: [],
      navInfo: [],
    };
  }

  componentDidMount() {
    fetch(`${API.BASE_URL}/navigator/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(navData =>
        this.setState({
          navInfo: navData.navigator_list,
        })
      );
    fetch(
      `${API.PRODUCT_DETAIL}?category=${this.props.match.params.id}&offset=0&limit=4`
    )
      .then(res => res.json())
      .then(listData =>
        this.setState({
          headerTitle: listData.category_info,
          productsData: listData.products_list,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `${API.PRODUCT_DETAIL}?category=${this.props.match.params.id}&offset=0&limit=10`
      )
        .then(res => res.json())
        .then(listData =>
          this.setState({
            headerTitle: listData.category_info,
            productsData: listData.products_list,
          })
        );
    }
  }

  render() {
    const { headerTitle, productsData, navInfo } = this.state;
    return (
      <>
        <div className="categoryTitle">
          <p className="subBigText">{headerTitle.name}</p>
          <p className="subSmallText">{headerTitle.description}</p>
          <img
            alt="product List img"
            src={headerTitle.category_image}
            className="subImg"
          />
        </div>
        <section className="productSection">
          {/* 상품 카테고리 Nav */}
          <ProductNav navMenuInfo={navInfo} />
          {/*상품 분류*/}
          <ProductList navMenuInfo={navInfo} productData={productsData} />
        </section>
      </>
    );
  }
}

export default ProductCategory;
