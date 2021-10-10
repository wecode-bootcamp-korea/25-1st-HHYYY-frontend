import React, { Component } from 'react';
import './ProductIntroduce.scss';

class ProductIntroduce extends Component {
  render() {
    return (
      <article className="itemIntroduce" id="introduceTab">
        <img
          className="itemInfoImg"
          src="http://img.lush.co.kr/product/bath/sakura_review.jpg"
          alt="itemIntroduce1"
        />
        <p className="textArea">
          <h1 className="how">사용 방법</h1>
          <br />
          물을 받은 욕조에 배쓰 밤을 넣으면 기포를 내며 녹습니다. 배쓰 밤이
          녹으며 시작되는 황홀한 변화를 즐겨보세요. 다 녹은 배쓰 밤은 온몸에
          촉촉함을 남겨줍니다. 입욕 후 가볍게 샤워하거나 수건으로 닦아
          마무리합니다.
          <br />* 진한 색상의 입욕제는 이염에 주의해주세요.
        </p>

        <img
          className="itemInfoImg"
          src="http://img.lush.co.kr/product/bath/sakura_use.jpg"
          alt="itemIntroduce2"
        />
      </article>
    );
  }
}

export default ProductIntroduce;
