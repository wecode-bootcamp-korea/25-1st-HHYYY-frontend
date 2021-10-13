import React, { Component } from 'react';
import './ReviewsTop.scss';

class ReviewsTop extends Component {
  render() {
    return (
      <div className="titleReview">
        <h3>
          Product Reviews
          <span className="star">★★★★★</span>
          <span className="reviewCount"> 3 </span>
        </h3>
        <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
      </div>
    );
  }
}

export default ReviewsTop;
