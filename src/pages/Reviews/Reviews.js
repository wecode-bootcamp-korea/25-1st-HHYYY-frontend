import React, { Component } from 'react';
import ReviewsTop from './ReviewsTop/ReviewsTop';
import ReviewsBody from './ReviewsBody/ReviewsBody';
import './Reviews.scss';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <div className="reviewWrap">
          <ReviewsTop />
          <ReviewsBody />
        </div>
      </div>
    );
  }
}

export default Reviews;
