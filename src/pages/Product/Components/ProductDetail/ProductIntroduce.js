import React, { Component } from 'react';
import './ProductIntroduce.scss';

class ProductIntroduce extends Component {
  render() {
    return (
      <article className="itemIntroduce" id="introduceTab">
        <p className="textArea">
          <h1 className="how">HHYYY</h1>
          <br />
          “ 자연에서 얻은 신선한 재료와 동물실험을 하지 않는 정직한 재료를
          사용하여 모든 제품을 손으로 만듭니다. 더불어 공정 거래, 인권 보호,
          포장 최소화 등 다양한 캠페인 활동을 통해 기업 윤리와 신념을 알리고
          있습니다. ”
          <br />
          <br />
          - 어떤 이유에서도 제품을 동물실험 하지 않고, 동물실험을 거친
          원재료조차 사용하지 않습니다.
          <br />- 모든 제품은 <b>베지테리언(Vegetarian)</b>이며, 그 중 약 95%는
          식물성 원료로만 만든 비건(Vegan)입니다.
          <br />- 환경 보호를 위해 고민하고, 동물과 자연 그리고 사람이 조화로운
          세상을 만들기 위한 도전과 혁신에 앞장섭니다.
        </p>
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
