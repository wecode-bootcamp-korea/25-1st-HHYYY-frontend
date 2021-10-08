import React, { Component } from 'react';

class SignInBox extends Component {
  render() {
    const { onChange, inputIdValue, inputPwValue, handleLoginBtn } = this.props;
    return (
      <div className="InputSignIn">
        <input
          name="inputIdValue"
          className="idInput"
          type="text"
          placeholder="아이디"
          onChange={onChange}
          onKeyUp={handleLoginBtn}
          value={inputIdValue}
        />
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
    );
  }
}

export default SignInBox;
