import React, { Component } from 'react';
import { API } from '../../../../config.js';
import './PhotoReviewImg.scss';

class PhotoReviewImg extends Component {
  constructor() {
    super();
    this.state = {
      closeBtnOFF: false,
      imgClick: false,
      photo: {},
    };
  }

  reviewImgClick = () => {
    const { imgClick, photo } = this.state;
    const { imgID } = this.props;
    this.setState({
      imgClick: !imgClick,
    });
    fetch(`${API.BASE_URL}/reviews/${imgID}`)
      .then(res => res.json())
      .then(info =>
        this.setState({
          photo: info.review_info,
        })
      );
    // 사진 IMG 파일 클릭시, 사진 파일을 받아오는 API
  };

  render() {
    const { imgSrc } = this.props;
    const { imgClick, photo } = this.state;

    return (
      <>
        <article className={imgClick ? 'imgPopUpON' : 'imgPopUpOFF'}>
          <div className="imgSection">
            <img className="photo" alt="photoReview_IMG" src={photo.image} />
          </div>
          <div className="bottomWrap">
            <div className="reviewUserInfo">
              <p className="userName">{photo.user_name}</p>
              <p className="userStar">★★★★★</p>
            </div>
            <div className="reviewContentWrap">
              <p className="reviewProductName">{photo.product_name}</p>
              <div className="reviewProductContent">{photo.content}</div>
              <p className="likeCount">
                <span className="countNumber">
                  추천 수 : {photo.like_count}
                </span>
              </p>
            </div>
          </div>
        </article>
        <img
          alt="photoReview_IMG"
          className="photoReviewIMG"
          src={imgSrc}
          onClick={this.reviewImgClick}
        />
      </>
    );
  }
}

export default PhotoReviewImg;
