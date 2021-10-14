import React, { Component } from 'react';
import MiddleHeader from './Components/ProductDetail/MiddleHeader';
import GoodToKnow from './Components/ProductDetail/GoodToKnow';
import PhotoReviewImg from './Components/ProductDetail/PhotoReviewImg';
import PhotoReviewWrap from './Components/ProductDetail/PhotoReviewWrap';
import './ProductDetail.scss';
import { API } from '../../config.js';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      photoReviewData: [],
      classON: false,
      imgClick: false,
      quantity: 1,
    };
  }

  componentDidMount() {
    fetch(`${API.PRODUCT_DETAIL}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(productInfo =>
        this.setState({
          productData: productInfo.product_info,
        })
      );
  }

  reviewAverageToStars = average => {
    const num = Math.floor(average);
    switch (num) {
      case 1:
        return '★';
      case 2:
        return '★★';
      case 3:
        return '★★★';
      case 4:
        return '★★★★';
      case 5:
        return '★★★★★';
      default:
        return '★★★★★';
    }
  };

  GoodToKnowBtnToggle = () => {
    const { classON } = this.state;
    this.setState({
      classON: !classON,
    });
  };

  handleQuantity = e => {
    e.preventDefault();
    const { className } = e.target;
    const { quantity } = this.state;
    if (className === 'countPlus') {
      {
        quantity < 10
          ? this.setState(state => {
              return { quantity: state.quantity + 1 };
            })
          : alert('10개까지만 주문할 수 있습니다');
      }
    } else if (className === 'countMinus') {
      if (quantity === 1) {
        alert('1개부터 주문할 수 있습니다');
        return;
      }
      this.setState(state => {
        return { quantity: state.quantity - 1 };
      });
    }
  };

  reviewImgClick = () => {
    const { imgClick } = this.state;
    this.setState({
      imgClick: !imgClick,
    });
    fetch(`${API.BASE_URL}/reviews/${2}`)
      .then(res => res.json())
      .then(info =>
        this.setState({
          photoReviewData: info.review_info,
        })
      );
    // 사진 IMG 파일 클릭시, 사진 파일을 받아오는 API
  };

  goToCart = () => {
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        option_id: this.state.productData.options.option_id,
        quantity: this.state.quantity,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          alert('장바구니에 담겼습니다');
        } else {
          alert('다시 시도해 주세요');
        }
      });
  };

  render() {
    const { productData, classON, imgClick, quantity, photoReviewData } =
      this.state;
    console.log(photoReviewData);
    return (
      <section className="productDetail">
        <article className="productInfo">
          <div className="productThumbnail">
            <img
              src={productData.thumbnail_url}
              className="productThumbnailImg"
              alt="productThumbnail_img"
            />
          </div>
          <div className="itemInfomation">
            <header className="itemTitle">
              <h2 className="itemName">{productData.name}</h2>
              <p className="itemTag">
                {productData.tags?.map(tag => {
                  return `#${tag} `;
                })}
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
                  <span className="itemInfoDetail">판매가격</span>₩&nbsp;
                  {productData.options && productData.options[0].price}
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">상품무게</span>
                  {productData.options && productData.options[0].size}g
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">구매수량</span>
                  <span className="itemCountBox">
                    <button
                      className="countMinus"
                      onClick={e => this.handleQuantity(e)}
                    >
                      -
                    </button>
                    <input
                      className="productCount"
                      name="count"
                      value={quantity}
                    />
                    <button
                      className="countPlus"
                      onClick={e => this.handleQuantity(e)}
                    >
                      +
                    </button>
                  </span>
                </li>
              </ul>
            </div>
            <div className="itemPrice">
              <span className="howMuch">총 합계 금액</span>
              <span className="allPrice">
                ₩&nbsp;
                {productData.options && productData.options[0].price * quantity}
              </span>
            </div>
            <div className="btnList">
              <button className="cartBtn" onClick={this.goToCart}>
                장바구니
              </button>
              <button className="buyBtn" onClick={this.buyIt}>
                구매하기
              </button>
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
                  <PhotoReviewWrap
                    imgClick={imgClick}
                    reviewData={photoReviewData}
                  />
                  {productData.review_images?.map((src, idx) => (
                    <PhotoReviewImg
                      key={idx}
                      imgSrc={src}
                      popUpEvent={this.reviewImgClick}
                    />
                  ))}
                </span>
              </div>
            </div>

            <div className="reviewCountWrap">
              <ul className="productScore">
                <li className="scoreText">리뷰 평점</li>
                <li className="score">{productData.rating_average}</li>
                <li className="scoreStars">
                  {this.reviewAverageToStars(productData.rating_average)}
                </li>
              </ul>
              <ul className="reviewCounter">
                <li className="reviewCountInfo">
                  <b className="infoName">리뷰등록</b>
                  {productData.review_count} 건
                </li>
                <li className="reviewCountInfo">
                  <b className="infoName">포토리뷰</b>
                  {productData.photo_review_count} 건
                </li>
              </ul>
            </div>
          </div>
        </article>
        <MiddleHeader name="상품 상세 정보" />

        <article className="itemIntroduce">
          <h2 className="ingredients">
            <b>Ingredients?</b>&nbsp;
            {productData.ingredients ? (
              productData.ingredients
            ) : (
              <b>재료 준비 중입니다. 잠시 기다려 주세요. :)</b>
            )}
          </h2>
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
            <br />- 모든 제품은 <b>베지테리언(Vegetarian)</b>이며, 그 중 약
            95%는 식물성 원료로만 만든 비건(Vegan)입니다.
            <br />- 환경 보호를 위해 고민하고, 동물과 자연 그리고 사람이
            조화로운 세상을 만들기 위한 도전과 혁신에 앞장섭니다.
          </p>
          <img
            className="itemInfoImg"
            src={productData.detail_images && productData.detail_images[0]}
            alt="itemIntroduce1"
          />
          <p className="textArea">
            <h1 className="how">사용 방법</h1>
            <br />
            {productData.how_to}
            <br />
            <br />
            물을 받은 욕조에 배쓰 밤을 넣으면 기포를 내며 녹습니다. 배쓰 밤이
            녹으며 시작되는 황홀한 변화를 즐겨보세요. 다 녹은 배쓰 밤은 온몸에
            촉촉함을 남겨줍니다. 입욕 후 가볍게 샤워하거나 수건으로 닦아
            마무리합니다.
            <br />* 진한 색상의 입욕제는 이염에 주의해주세요.
          </p>

          <img
            className="itemInfoImg"
            src={productData.detail_images && productData.detail_images[1]}
            alt="itemIntroduce2"
          />
        </article>
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
            ■ 고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급 받은
            날로부터 7일 이내 가능하며, 미 개봉 제품만 가능합니다. 고객센터로
            반품 접수를 받고 있으며, 지정 택배사를 이용하여 상품 회수 후
            교환/반품 여부에 관한 안내가 이루어집니다. <br />
          </p>
        </article>
        <MiddleHeader name="상품 후기" />
      </section>
    );
  }
}

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

export default ProductDetail;
