import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResultProductCard from './ResultProductCard';
import './ResultPage.scss';

class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products_list: [],
      products_count: '',
    };
  }
  componentDidMount = () => {
    fetch(
      `http://10.58.7.141:8000/products?search=${
        this.props.location.search.split('=')[1]
      }`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: this.state.id,
          products_count: this.state.count,
          name: this.state.name,
          thumbnail_url: this.state.thumbnail_image,
          price: this.state.price,
          tags: this.state.tags,
        }),
      }
    )
      .then(response => response.json())
      .then(result =>
        this.setState({
          products_list: result.products_list,
          products_count: result.products_count,
        })
      );
  };

  render() {
    const { products_count, products_list } = this.state;

    return (
      <div className="resultPage">
        <div className="content">
          <div className="result">
            <div className="listHeadingBox">
              <h2>
                {`[${this.props.location.search}] 검색결과 ${products_count}개`}
              </h2>
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
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResultPage);
