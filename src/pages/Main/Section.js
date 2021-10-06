import React, { Component } from 'react';
import './Section.scss';

class Section extends Component {
  render() {
    return (
      <section>
        <div className="titleBanner">
          <img src="./images/main/title/title01.png" />
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
