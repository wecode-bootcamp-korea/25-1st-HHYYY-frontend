import React, { Component } from 'react';
import './GoodToKnow.scss';

class GoodToKnow extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <li className="veganList">
          <img src={data.imgSrc} className="veganImg" alt="veganImg" />
          <span className="veganText_left">
            <p className="veganHeader">{data.veganHeader}</p>
            <p className="veganText">{data.content}</p>
          </span>
        </li>
      </>
    );
  }
}

export default GoodToKnow;
