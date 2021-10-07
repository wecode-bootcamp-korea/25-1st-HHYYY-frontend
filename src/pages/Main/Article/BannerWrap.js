import React, { Component } from 'react';
import './BannerWrap.scss';

class bannerWrap extends Component {
  render() {
    return (
      <article className="bannerWrap">
        <div className="banner1">
          <h2>
            <span class="abocado">아보카도</span>는 피부에 양보하세요
          </h2>
          <img src="./images/main/banner/middle/banner01.jpg" alt="banner1" />
        </div>
        <div className="banner2">
          <h2>제주로부터 녹차팩이 도착했어요!</h2>
          <img src="./images/main/banner/middle/banner02.jpg" alt="banner2" />
        </div>
        <div className="banner3">
          <h2>
            딸기 왕자를
            <br />
            아시나요?
          </h2>
          <img
            src="./images/main/banner/middle/banner05.jpg"
            alt="banner5"
            className="banner5"
          />
        </div>
        <div className="banner4">
          <h2>
            가입시 포인트
            <br />
            5000원 증정
          </h2>
          <img src="./images/main/banner/middle/banner03.jpg" alt="banner3" />
        </div>
      </article>
    );
  }
}

export default bannerWrap;
