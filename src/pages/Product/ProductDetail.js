import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <section className="productDetail">
        <article className="productInfo">
          <div className="productThumbnail">
            <img
              src="https://www.lush.co.kr/data/goods/16/03/18/174/174_detail_044.jpg"
              className="productThumbnail_img"
              alt="productThumbnail_img"
            />
          </div>
          <div className="itemInfomation">
            <header className="itemTitle">
              <h2 className="itemName">인터갈락틱</h2>
              <p className="itemTag">#배쓰밤 #환상적인우주느낌</p>
            </header>
            <div className="itemInfo">
              <p className="goodToKnow">
                Good to Know
                <img
                  src="/images/product/question.png"
                  className="questionMark"
                  alt="questionMark"
                />
              </p>
              <ul className="itemInfoList">
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">판매가격</span>₩ 25,000
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">상품무게</span>50g
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">구매수량</span> 1
                </li>
              </ul>
            </div>
            <div className="itemPrice">
              <span className="howMuch">총 합계 금액</span>
              <span className="allPrice">₩ 25,000</span>
            </div>
            <div className="btnList">
              <button className="cartBtn">장바구니</button>
              <button className="buyBtn">구매하기</button>
            </div>
          </div>
        </article>
        <article className="photoReviewWrap">
          <h2 className="photoReviewText">Photo Review</h2>
          <div className="photoList">
            <div className="photoListWrap">
              <h2 className="photoListText">포토리뷰 모아보기</h2>
              <div className="photoImgList">
                <span className="photoWrap">
                  <img
                    src="/images/main/banner/middle/banner05.jpg"
                    className="reviewImg"
                    alt="reviewImg"
                  />
                  <img
                    src="/images/main/banner/middle/banner05.jpg"
                    className="reviewImg"
                    alt="reviewImg"
                  />
                  <img
                    src="/images/main/banner/middle/banner05.jpg"
                    className="reviewImg"
                    alt="reviewImg"
                  />
                  <img
                    src="/images/main/banner/middle/banner05.jpg"
                    className="reviewImg"
                    alt="reviewImg"
                  />
                </span>
              </div>
            </div>

            <div className="reviewCountWrap">
              <ul className="productScore">
                <li className="scoreText">평가</li>
                <li className="score">5</li>
                <li className="scoreStars">*****</li>
              </ul>
              <ul className="reviewCounter">
                <li className="reviewCountInfo">
                  <b className="infoName">리뷰등록</b> 18 건
                </li>
                <li className="reviewCountInfo">
                  <b className="infoName">포토리뷰</b> 26 건
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="tabWrap">
          <div className="tabON">
            <Link
              to="#introduceTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              상품 상세정보
            </Link>
          </div>

          <div className="tabOFF">
            <Link
              to="#etcTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              배송교환 및 반품 안내
            </Link>
          </div>

          <div className="tabOFF">
            <Link
              to="#reviewTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              상품 후기
            </Link>
          </div>
        </article>

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

        <article className="tabWrap">
          <div className="tabOFF">
            <Link
              to="#introduceTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              상품 상세정보
            </Link>
          </div>

          <div className="tabON">
            <Link
              to="#etcTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              배송교환 및 반품 안내
            </Link>
          </div>

          <div className="tabOFF">
            <Link
              to="#reviewTab"
              spy={true}
              smooth={true}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              상품 후기
            </Link>
          </div>
        </article>

        <article id="etcTab">
          <p className="etcInfo">
            ■ 배송비 : 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은
            배송비가 추가될 수 있습니다) <br />
            ■ 택배사 : 우체국 택배를 이용합니다. <br />
            ■ 배송가능지역 : 국내 배송 / 해외 배송은 불가 합니다. <br />
            ■ 홈페이지에서 구매한 경우 러쉬코리아 홈페이지에서 구매한 제품은
            홈페이지를 통해서만 교환이 가능합니다. 고객님의 변심에 의한 반품인
            경우 상품 및 서비스를 공급 받은 날로부터 7일 이내 가능하며, 미 개봉
            제품만 가능합니다. 고객센터(1644-2357)로 반품 접수를 받고 있으며,
            지정 택배사를 이용하여 상품 회수 후 교환/반품 여부에 관한 안내가
            이루어집니다. <br />■ 고객센터 1644-2357
          </p>
        </article>
      </section>
    );
  }
}

export default ProductDetail;
