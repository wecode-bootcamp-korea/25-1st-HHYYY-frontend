import React, { Component } from 'react';

class PhotoReviewImg extends Component {
  childFunction = () => {
    this.props.popUpEvent();
  };

  render() {
    const { imgSrc } = this.props;
    return (
      <>
        <img
          alt="photoReview_IMG"
          className="photoReviewIMG"
          src={imgSrc}
          onClick={() => this.childFunction()}
        />
      </>
    );
  }
}

export default PhotoReviewImg;
