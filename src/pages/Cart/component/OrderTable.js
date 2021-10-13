import React, { Component } from 'react';
import DecideBtns from './DecideBtns';
import TableBody from './TableBody';

class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      productSpac: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartListData.json')
      // , {
      //   headers: {
      //     Authorization:
      //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.mRBUS6A4MEpCs4jn1V6RCoyV3EVwCIK3RLO4DjajbC8',
      //   },
      // })
      .then(res => res.json())
      .then(cartData => {
        this.setState({ cartList: cartData.cart_list, productSpac: cartData });
      });
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/data/cartListData.json', {
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.mRBUS6A4MEpCs4jn1V6RCoyV3EVwCIK3RLO4DjajbC8',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(cartData => {
  //       this.setState({ cartList: cartData.cart_list, productSpac: cartData });
  //     });
  // }

  // totalquantity = cartData => {
  //   let quantity = cartData.cart_list[0].quantity;
  //   console.log(quantity);
  // };

  // 상품삭제
  // deleteAllHandler = () => {
  //   fetch('http://10.58.6.213:8080/carts', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   }).then(res => {
  //     this.setState({ cartList: [] });
  //   });
  // };

  render() {
    const { cartList, productSpac } = this.state;
    // let totalquantity = cartList.quantity.map(function (num) {
    //   return cartList.quantity + cartList.quantity;
    // });
    console.log();
    return (
      <>
        <section className="orderPage">
          <form className="cartForm">
            <div className="emptyCart">
              <h2>제품</h2>
            </div>
            <table className="addCart">
              <thead>
                <tr>
                  <th width="10%">
                    <span>
                      <input
                        className="checkInput"
                        type="checkbox"
                        onClick={e => this.inputClick(e)}
                      ></input>
                    </span>
                  </th>
                  <th width="40%">제품정보</th>
                  <th width="15%">수량</th>
                  <th width="10%">금액</th>
                  <th width="7%">복지혜택</th>
                  <th width="10%">합계금액</th>
                  {/* <th width="10%">배송비</th> */}
                </tr>
              </thead>
              <tbody>
                {cartList.map(productData => {
                  return (
                    <tr className="tableBody" key={productData.cart_id}>
                      <TableBody itemData={productData} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </section>
        <section className="priceBox">
          <div className="totalPrice">
            <p>
              총{productSpac.total_quantity}
              개의 금액 ₩<strong>{productSpac.total_price}</strong> + 배송비
              ₩&nbsp;
              <strong>{productSpac.shipping}</strong> =<em>총 주문금액 </em>
              <span>₩ </span>
              <span>{productSpac.order_price}</span>
            </p>
          </div>
        </section>
        <section className="CartBtnBox">
          <div className="deleteProduct">
            <button className="deleteBtn">삭제하기</button>
          </div>
          <DecideBtns />
        </section>
      </>
    );
  }
}

export default OrderTable;
