import React, { Component } from 'react';

class TitleBanner extends Component {
  render() {
    return (
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
    );
  }
}

export default TitleBanner;
