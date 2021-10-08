import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './signin.scss';

class SignIn extends Component {
  render() {
    return (
      <>
        <Header />
        <article className="signIn">
          <div className="subject">
            <h1>로그인</h1>
          </div>
          <div className="signInBox">
            <form>
              <div className="InputSignIn">
                <input className="idInput" type="text" placeholder="아이디" />
                <input
                  className="pwInput"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div>
                <button className="siginBtn">로그인</button>
              </div>
              <div className="signup">
                <button className="signup">회원가입</button>
              </div>
            </form>
          </div>
        </article>
      </>
    );
  }
}

export default SignIn;
