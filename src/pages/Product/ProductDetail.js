import React, { Component } from 'react';
import ProductInfo from './Components/ProductDetail/ProductInfo';
import MiddleHeader from './Components/ProductDetail/MiddleHeader';
import ProductIntroduce from './Components/ProductDetail/ProductIntroduce';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <section className="productDetail">
        <ProductInfo />
        <MiddleHeader name="상품 상세 정보" />
        <ProductIntroduce />
        <MiddleHeader name="배송교환 및 반품 안내" />
        <article className="etcTab">
          <p className="etcInfo">
            ■ 배송비 : 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은
            배송비가 추가될 수 있습니다) <br />
            <br />
            ■ 택배사 : 우체국 택배를 이용합니다. <br />
            <br />
            ■ 배송가능지역 : 국내 배송 / 해외 배송은 불가 합니다. <br />
            <br />
            ■ 홈페이지에서 구매한 경우 러쉬코리아 홈페이지에서 구매한 제품은
            홈페이지를 통해서만 교환이 가능합니다. 고객님의 변심에 의한 반품인
            경우 상품 및 서비스를 공급 받은 날로부터 7일 이내 가능하며, 미 개봉
            제품만 가능합니다. 고객센터(1644-2357)로 반품 접수를 받고 있으며,
            지정 택배사를 이용하여 상품 회수 후 교환/반품 여부에 관한 안내가
            이루어집니다. <br />
            <br />■ 고객센터 1644-2357
          </p>
        </article>
        <MiddleHeader name="상품 후기" />
      </section>
    );
  }
}

export default ProductDetail;
