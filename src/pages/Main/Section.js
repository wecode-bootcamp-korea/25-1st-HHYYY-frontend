import React, { Component } from 'react';
import './Section.scss';

class Section extends Component {
  render() {
    return (
      <section>
        <div className="titleBanner">
          <div class="titleText01">
            <h2>딸기의 변신은 무죄!</h2>
            <p className="smallText">
              딸기 향을 만끽하며
              <br />
              씻어 봐요
            </p>
          </div>
          <img
            className="titleBannerImg"
            src="./images/main/title/title001.png"
            alt="strawberry title"
          />
        </div>
        <article className="contentWrap">
          <div className="productWrap">
            <h2>나만 알고 싶은 향기</h2>
            <div className="productRolling"></div>
          </div>
          <div className="bannerRolling"></div>
        </article>
        <article className="bannerWrap">
          <div className="banner1"></div>
          <div className="banner2"></div>
          <div className="banner3"></div>
          <div className="banner4"></div>
        </article>
        <article className="newProductWrap">
          <div className="productText"></div>
          <div className="productImg"></div>
        </article>
      </section>
    );
  }
}

export default Section;
