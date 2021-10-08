import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeftWrap.scss';

class LeftWrap extends Component {
  render() {
    return (
      <div className="leftWrap">
        <div className="logo">
          <Link to="/main">훈훈한 연들</Link>
        </div>
        <dl className="serviceWrap">
          <dt>
            고객센터 <span> 1644-2357</span>
          </dt>
          <dd class="email">
            <a href="mailto:order@lush.co.kr">order@hoonhoons.co.kr</a>
          </dd>
          <dd className="phoneLine">
            상담전화 10/5-10/19 <br />
            상담톡 10:00-16:00(평일)
          </dd>
        </dl>

        <dl className="corporation">
          <dt>
            기업선물
            <span>070-2349-3411</span>
          </dt>
          <dd class="email">
            <a href="mailto:order@lush.co.kr">order@hoonhoons.co.kr</a>
          </dd>
        </dl>
        <div className="snsWrap">
          <Link to="/main" target="_blank">
            <i className="fab fa-facebook" alt="Facebook" title="Facebook"></i>
          </Link>

          <Link to="/main" target="_blank">
            <i className="fab fa-instagram" alt="IG" title="IG"></i>
          </Link>

          <Link to="/main" target="_blank">
            <i className="fab fa-youtube" alt="Youtube" title="Youtube"></i>
          </Link>

          {/*          <Link to="/main" target="_blank">
            <img
              src="./images/footer/kakaotalk.png"
              className="kakaotalk"
              alt="kakaotalk"
              title="kakaotalk"
            />
          </Link>

          <Link to="/main" target="_blank">
            <img
              src="./images/footer/naver.png"
              className="naver"
              alt="naver"
              title="naver" /> 
          </Link>*/}
        </div>
      </div>
    );
  }
}

export default LeftWrap;
