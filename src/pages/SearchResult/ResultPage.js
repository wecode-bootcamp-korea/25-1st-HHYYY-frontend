import React, { Component } from 'react';
import ProductCard from '../../components/Product/ProductCard';
import './ResultPage.scss';

class ResultPage extends Component {
  render() {
    return (
      <div className="resultPage">
        <div className="content">
          <div className="result">
            <div className="listHeadingBox">
              <h2>[핑크] 검색결과 6개</h2>
            </div>
            <div className="itemList">
              <div className="list">
                <ul className="prodList">
                  {COMMENT_LIST.map(product => (
                    <ProductCard products={product} />
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

export default ResultPage;

const COMMENT_LIST = [
  {
    id: 1,
    name: '딸기비누',
    thumbnail_image:
      'https://images.unsplash.com/photo-1610935591451-8a456e1b1d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
  {
    id: 2,
    name: '딸기비누',
    thumbnail_image:
      'https://images.unsplash.com/photo-1610935591451-8a456e1b1d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
  {
    id: 3,
    name: '딸기비누',
    thumbnail_image:
      'https://images.unsplash.com/photo-1610935591451-8a456e1b1d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
  {
    id: 4,
    name: '딸기비누',
    thumbnail_image:
      'https://images.unsplash.com/photo-1610935591451-8a456e1b1d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
  {
    id: 5,
    name: '딸기비누',
    thumbnail_image:
      'https://i.pinimg.com/564x/0b/24/63/0b24637004f7a42ee44b648a25f7dd0c.jpg',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
  {
    id: 6,
    name: '딸기비누',
    thumbnail_image:
      'https://i.pinimg.com/564x/0b/24/63/0b24637004f7a42ee44b648a25f7dd0c.jpg',
    price: '7000',
    tags: ['딸기향가득', '치훈님이좋아하는향'],
  },
];
