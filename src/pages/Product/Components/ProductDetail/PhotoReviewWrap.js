import React, { Component } from 'react';

class PhotoReviewWrap extends Component {
  constructor() {
    super();
    this.state = {
      closeBtnOFF: false,
    };
  }
  render() {
    const { imgClick, data } = this.props;
    return (
      <article className={imgClick ? 'imgPopUpON' : 'imgPopUpOFF'}>
        <div className="imgSection">
          {/* <img
            className="photoReviewIMG"
            alt="photoReview_IMG"
            src={data.image}
          /> */}
        </div>
        <div className="bottomWrap">
          <div className="reviewUserInfo">
            <p className="userName">{data.user_name}</p>
            <p className="userStar">★★★★★</p>
          </div>
          <div className="reviewContentWrap">
            <p className="reviewProductName">{data.product_name}</p>
            <div className="reviewProductContent">{data.content}</div>
            <p className="likeCount">
              <span className="countNumber">추천 수 : {data.like_count}</span>
              <button className="recommentBtn">추천하기</button>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default PhotoReviewWrap;
