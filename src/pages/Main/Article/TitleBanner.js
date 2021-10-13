import React, { Component } from 'react';
import './TitleBanner.scss';

class TitleBanner extends Component {
  render() {
    return (
      <div className="titleBanner">
        <div class="titleText01">
          <h2>
            <span className="strawberry">딸기</span>의 변신은 무죄!
          </h2>
          <p className="smallText">
            딸기향을 만끽하며
            <br />
            씻어 보세요
          </p>
        </div>
        <img
          className="titleBannerImg"
          src="./images/main/title/title001.png"
          alt="strawberry title"
        />
      </div>
    );
  }
}

export default TitleBanner;
