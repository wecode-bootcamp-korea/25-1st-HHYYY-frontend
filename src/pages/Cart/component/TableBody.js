import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableBody extends Component {
  render() {
    const { itemData } = this.props;
    return (
      <>
        <td>
          <span>
            <input type="checkbox" className="checkedInput"></input>
          </span>
        </td>
        <td className="productSpec">
          <img alt="productImg" src={itemData.image} />
          <div>
            <Link to="#">{itemData.product_name}</Link>
            <p>{itemData.category_name}</p>
            <p>용량: {itemData.size}g</p>
          </div>
        </td>
        <td>
          <span className="countBox">
            <button>
              <i className="fas fa-minus fa-xs" />
            </button>
            <input
              type="text"
              name="count"
              className="productCount"
              value={itemData.quantity}
            />
            <button>
              <i className="fas fa-plus fa-xs" />
            </button>
          </span>
        </td>
        <td>
          <strong>{itemData.product_price}</strong>
        </td>
        <td>
          &nbsp;
          {/* <div style={{ width: '40px', height: '100px' }}></div> */}
        </td>
        <td>
          <strong>{itemData.price}</strong>
        </td>
        <td>
          <span className="deliveryFee">₩ 2,500</span>
          <span className="deliveryFee">(택배)</span>
        </td>
      </>
    );
  }
}

export default TableBody;
