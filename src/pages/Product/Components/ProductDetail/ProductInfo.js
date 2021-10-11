import React, { Component } from 'react';
import GoodToKnow from './GoodToKnow';
import './ProductInfo.scss';

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      classON: false,
    };
  }

  GoodToKnowBtnToggle = () => {
    const { classON } = this.state;
    this.setState({
      classON: !classON,
    });
  };

  render() {
    const { classON } = this.state;
    const { productInfo } = this.props;
    console.log('props는 얼마', productInfo[0]);
    return (
      <>
        <article className="productInfo">
          <div className="productThumbnail"></div>
          <div className="itemInfomation">
            <article className="navigatorWrap">
              <span className="whereIsIt">홈 {'>'} </span>
              <span className="whereIsIt">샤워 {'>'} </span>
              <span className="whereIsIt">솝</span>
            </article>
            <header className="itemTitle">
              {/* <h2 className="itemName">{productInfo[0].name}</h2> */}
              <p className="itemTag">
                {/* {productInfo[0].tags.map(tag => {
                  return `${tag}`;
                })} */}
              </p>
            </header>
            <div className="itemInfo">
              <ul className={classON ? 'markON' : 'markOFF'}>
                {VEGAN_LIST.map(data => (
                  <GoodToKnow key={data.id} data={data} />
                ))}
              </ul>
              <p className="goodToKnow">
                Good to Know
                <img
                  src="/images/product/question.png"
                  className="questionMark"
                  alt="questionMark"
                  onClick={this.GoodToKnowBtnToggle}
                />
              </p>
              <ul className="itemInfoList">
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">판매가격</span>₩
                  {/* {productInfo[0].options[0].price}
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">상품무게</span>
                  {productInfo[0].options[0].size} */}
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">구매수량</span>
                  <span className="itemCountBox">
                    <button className="countMinus">-</button>
                    <input className="productCount" name="count" value="1" />
                    <button className="countPlus">+</button>
                  </span>
                </li>
              </ul>
            </div>
            <div className="itemPrice">
              <span className="howMuch">총 합계 금액</span>
              {/* <span className="allPrice">
                ₩ {productInfo[0].options[0].price}
              </span> */}
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
                  {/* {productInfo[0].review_images.map(imgSrc => (
                    <img src={imgSrc} className="reviewImg" alt="reviewImg" />
                  ))} */}
                </span>
              </div>
            </div>

            <div className="reviewCountWrap">
              <ul className="productScore">
                <li className="scoreText">평가</li>
                <li className="score">{productInfo.rating_average}</li>
                <li className="scoreStars">*****</li>
              </ul>
              <ul className="reviewCounter">
                <li className="reviewCountInfo">
                  <b className="infoName">리뷰등록</b>
                  {productInfo.review_count} 건
                </li>
                <li className="reviewCountInfo">
                  <b className="infoName">포토리뷰</b>
                  {productInfo.photo_review_count} 건
                </li>
              </ul>
            </div>
          </div>
        </article>
      </>
    );
  }
}

// 상품정보가 아닌, 값이 바뀌지 않는 상수 데이터는 여기에다 호출하는게 맞는지? 아니면 Public/data에 json 파일로 따로 분리해주는게 맞는지?
const VEGAN_LIST = [
  {
    id: 1,
    veganHeader: '비건(Vegan)',
    content:
      '동물성 원료를 전혀 포함하지 않은 영국 비건협회 인증된 제품입니다.',
    imgSrc: '/images/product/vegan1.png',
  },
  {
    id: 2,
    veganHeader: '베지테리언(Vegetarian)',
    content:
      '우유, 달걀, 꿀을 제외한 동물성 원료를 포함하지 않은 영국 베지테리언 협회 인증 제품입니다.',
    imgSrc: '/images/product/vegan2.png',
  },
  {
    id: 3,
    veganHeader: '베지테리언에게 적합한 제품(Suitable for Vegetarians)',
    content: '동물성 원료를 전혀 포함하지 않은 제품입니다.',
    imgSrc: '/images/product/vegan3.png',
  },
  {
    id: 4,
    veganHeader: '셀프-프리저빙(Self-Preserving)',
    content: '자연에서 얻은 원재료로 스스로 보존 가능한 제품입니다.',
    imgSrc: '/images/product/vegan4.png',
  },
];

export default ProductInfo;
