import React, { Component } from 'react';
import './BannerWrap.scss';

class bannerWrap extends Component {
  render() {
    return (
      <article className="bannerWrap">
        <section className="leftBanner">
          <h2 className="leftBanner_text">
            <span class="abocado">아보카도</span>는&nbsp;
            <span class="piboo">피부</span>에 양보하세요
          </h2>
          <img
            className="leftBanner_img"
            src="./images/main/banner/middle/banner01.jpg"
            alt="leftBanner_img"
          />
        </section>
        <section className="rightBannerTop">
          <h2 className="rightBannerTop_text">
            제주로부터 녹차팩이 도착했어요!
          </h2>
          <img
            className="rightBannerTop_img"
            src="./images/main/banner/middle/banner02.jpg"
            alt="rightBannerTop_img"
          />
        </section>
        <section className="rightBannerBottom_left">
          <h2 className="rightBannerBottom_left_text">
            딸기 왕자를
            <br />
            아시나요?
          </h2>
          <img
            src="./images/main/banner/middle/banner05.jpg"
            alt="rightBannerBottom_left_img"
            className="rightBannerBottom_left_img"
          />
        </section>
        <section className="rightBannerBottom_right">
          <h2 className="rightBannerBottom_right_text">
            가입시 포인트
            <br />
            5000원 증정
          </h2>
          <img
            className="rightBannerBottom_right_img"
            src="./images/main/banner/middle/banner03.jpg"
            alt="rightBannerBottom_right_img"
          />
        </section>
      </article>
    );
  }
}

export default bannerWrap;
