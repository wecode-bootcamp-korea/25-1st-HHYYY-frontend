import React, { Component } from 'react';
import DecideBtns from './DecideBtns';
import TableBody from './TableBody';
import { API } from '../../../config';

class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      productSpac: '',
    };
  }

  componentDidMount() {
    fetch(`${API.CART}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
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
    const { cartList } = this.state;
    const { total_quantity, total_price, shipping, order_price } =
      this.state.productSpac;
    // let totalquantity = cartList.quantity.map(function (num) {
    //   return cartList.quantity + cartList.quantity;
    // });
    return (
      <>
        <section className="orderPage">
          <form className="cartForm">
            <div className="emptyCart">
              <h2>제품</h2>
            </div>
            <table className="addCart">
              <colgroup>
                <col style={{ width: '10%' }}></col>
                <col style={{ width: '40%' }}></col>
                <col style={{ width: '15%' }}></col>
                <col style={{ width: '10%' }}></col>
                <col style={{ width: '7%' }}></col>
                <col style={{ width: '10%' }}></col>
                <col style={{ width: '10%' }}></col>
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span>
                      <input className="checkInput" type="checkbox" />
                    </span>
                  </th>
                  <th>제품정보</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th>복지혜택</th>
                  <th>합계금액</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map(productData => (
                  <tr className="tableBody" key={productData.cart_id}>
                    <TableBody itemData={productData} />
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </section>
        <section className="priceBox">
          <div className="totalPrice">
            <p>
              총 {total_quantity}
              개의 금액 ₩<strong>{total_price}</strong> + 배송비 ₩&nbsp;
              <strong>{shipping}</strong> =<em>총 주문금액 </em>
              <span>₩ </span>
              <span>{order_price}</span>
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
