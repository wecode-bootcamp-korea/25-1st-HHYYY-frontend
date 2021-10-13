import React, { Component } from 'react';
import DecideBtns from './DecideBtns';
import TableBody from './TableBody';

class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      // isCheckBox: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartListData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ cartList: data.cart_list });
      });
  }

  // 상품삭제
  // deleteAllHandler = () => {
  //   fetch('#', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   }).then(res => {
  //     this.setState({ cartList: [] });
  //   });
  // };

  // inputClick = e => {
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     const checkedEL = document.getElementsByClassName('checkedInput');
  //     checkedEL.checked = true;
  //   }
  // };

  render() {
    const { cartList } = this.state;
    // const { total_price, shipping } = cartList;
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
                  <th width="10%">배송비</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map(productData => {
                  return (
                    <tr className="tableBody" key={productData.id}>
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
              총 0 개의 금액 ₩ <strong>{cartList['total_price']}</strong> +
              배송비 ₩&nbsp;
              <strong>2,500</strong> =<em>총 주문금액 </em>
              <span>₩ </span>
              <span>525,000</span>
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
