import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResultProductCard from './ResultProductCard';
import './ResultPage.scss';
import { API } from '../../config';

class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products_list: [],
      id: '',
      name: '',
      thumbnail_image: '',
      price: '',
      tags: '',
      products_count: '',
    };
  }
  componentDidMount = () => {
    fetch(`${API.SEARCH}${this.props.location.search.split('=')[1]}`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          products_list: result.products_list,
          products_count: result.products_count,
        });
      });
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.location.search.split('=')[1] !==
      prevProps.location.search.split('=')[1]
    ) {
      fetch(`${API.SEARCH}${this.props.location.search.split('=')[1]}`)
        .then(response => response.json())
        .then(result => {
          this.setState({
            products_list: result.products_list,
            products_count: result.products_count,
          });
        });
    }
  }

  render() {
    const { products_count, products_list } = this.state;
    return (
      <div className="resultPage">
        <div className="content">
          <div className="result">
            <div className="listHeadingBox">
              <h2>{`검색결과 ${products_count ? products_count : 0}개`}</h2>
            </div>
            <div className="itemList">
              <div className="list">
                <ul className="prodList">
                  {products_list.map(product => (
                    <ResultProductCard products={product} />
                  ))}
                </ul>
              </div>
            </div>
            <ul className="page">
              <li className="active">
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResultPage);
