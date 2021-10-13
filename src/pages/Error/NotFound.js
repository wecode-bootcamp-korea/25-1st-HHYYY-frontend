import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="notFound">
          <p className="numberWrap">404</p>
          <p className="numberText">
            존재하지 않는 페이지입니다.
            <br />
            정상적인 경로로 접근해 주세요.
          </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
