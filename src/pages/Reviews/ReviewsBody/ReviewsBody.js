import React, { Component } from 'react';
import StarRatings from './StarRatings';
import './ReviewsBody.scss';

class ReviewsBody extends Component {
  render() {
    return (
      <div className="reviewsBody">
        <dl className="commentBox">
          <dt>평가</dt>
          <dd>
            <ul className="starRating">
              <StarRatings />
            </ul>
          </dd>
        </dl>
      </div>
    );
  }
}

export default ReviewsBody;
