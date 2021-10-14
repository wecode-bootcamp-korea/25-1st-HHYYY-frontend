import React, { Component } from 'react';
import { API } from '../../../../config.js';
import './PhotoReviewImg.scss';

class PhotoReviewImg extends Component {
  constructor() {
    super();
    this.state = {
      closeBtnOFF: false,
      imgClick: false,
      photoReviewData: {},
    };
  }

  reviewImgClick = () => {
    const { imgClick } = this.state;
    this.setState({
      imgClick: !imgClick,
    });
    fetch(`${API.REVIEW}/${this.props.imgID}`)
      .then(res => res.json())
      .then(info =>
        this.setState({
          photoReviewData: info.review_info,
        })
      );
    console.log(imgClick);
    // 사진 IMG 파일 클릭시, 사진 파일을 받아오는 API
  };

  render() {
    const { imgSrc, imgClick, photoReviewData } = this.props;

    return (
      <>
        <article className={imgClick ? 'imgPopUpON' : 'imgPopUpOFF'}>
          <div className="imgSection">
            <img
              className="photo"
              alt="photoReview_IMG"
              src={photoReviewData && photoReviewData.image}
            />
          </div>
          <div className="bottomWrap">
            <div className="reviewUserInfo">
              <p className="userName">
                {photoReviewData && photoReviewData.user_name}
              </p>
              <p className="userStar">★★★★★</p>
            </div>
            <div className="reviewContentWrap">
              <p className="reviewProductName">
                {photoReviewData && photoReviewData.product_name}
              </p>
              <div className="reviewProductContent">
                {photoReviewData && photoReviewData.content}
              </div>
              <p className="likeCount">
                <span className="countNumber">
                  추천 수 : {photoReviewData && photoReviewData.like_count}
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
