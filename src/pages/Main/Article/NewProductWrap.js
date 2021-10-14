import React, { Component } from 'react';
import './NewProductWrap.scss';

class newProductWrap extends Component {
  render() {
    return (
      <article className="newProductWrap">
        <div className="productText">
          <h2 className="productText_big_text">
            NEW 탱글드 헤어
            <br />
            트리트먼트
          </h2>
          <p className="productText_small_text">
            전통 악기에서 영감을 받은 두피 트리트먼트로, 기분 좋은 낮잠에
            빠져들듯 부드럽고 편안한 시간을 선사합니다.
          </p>
        </div>
        <div className="productImg_longHair">
          <img
            className="productImg_longHair_img"
            alt="long hair"
            src="/images/main/banner/middle/longhair.jpg"
          />
        </div>
      </article>
    );
  }
}

export default newProductWrap;
