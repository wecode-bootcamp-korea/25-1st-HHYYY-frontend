import React, { Component } from 'react';
import './signinBox.scss';

class SignInBox extends Component {
  render() {
    const { onChange, inputIdValue, inputPwValue, handleLoginBtn } = this.props;
    return (
      <>
        <div className="InputSignIn">
          <span>
            <i className="fas fa-user-circle fa-lg" />
          </span>
          <input
            name="inputIdValue"
            className="idInput"
            type="text"
            placeholder="아이디"
            onChange={onChange}
            onKeyUp={handleLoginBtn}
            value={inputIdValue}
          />
        </div>
        <div className="InputSignIn">
          <span>
            <i className="fas fa-lock fa-lg" />
          </span>
          <input
            name="inputPwValue"
            className="pwInput"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            onKeyUp={handleLoginBtn}
            value={inputPwValue}
          />
        </div>
      </>
    );
  }
}

export default SignInBox;
