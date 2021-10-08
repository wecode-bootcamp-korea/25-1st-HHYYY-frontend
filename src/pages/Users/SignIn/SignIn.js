import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import SignInBox from './SignInBox';

import './signin.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // handleLoginBtn = () => {
  //   const { inputIdValue, inputPwValue } = this.state;
  //   this.setState({
  //     isBtnOn:
  //       inputIdValue.indexOf('@') !== -1 &&
  //       inputPwValue.length >= 5 &&
  //       inputPwValue.indexOf('#') !== -1,
  //   });
  // };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.7.20:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.inputIdValue,
        password: this.state.inputPwValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token); // 토큰 저장. ('토큰키값', '키의 벨류값')
          this.props.history.push('/main');
        } else {
          alert('회원정보를 찾을 수 없습니다');
        }
      });
  };

  render() {
    const { isBtnOn } = this.state;
    return (
      <>
        <Header />
        <article className="SignIn">
          <div className="subject">
            <h1>로그인</h1>
          </div>
          <div className="signInBox">
            <form>
              <SignInBox
                onChange={this.handleInput}
                handleLoginBtn={this.handleLoginBtn}
              />
              <div>
                <button
                  className={isBtnOn ? 'changeBtnColor' : 'siginBtn'}
                  onClick={this.goToMain}
                >
                  로그인
                </button>
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

export default withRouter(SignIn);
