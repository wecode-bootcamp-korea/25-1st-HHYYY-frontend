import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SigninBox from './SigninBox';

import './signin.scss';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
      isBtnOn: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    this.handleLoginBtn();
  };

  handleLoginBtn = () => {
    const { inputIdValue, inputPwValue } = this.state;
    const checkEng = /[a-z | A-Z]/;
    const checkSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const checkNumber = /[0-9]/;

    const isBtnActive =
      inputIdValue.indexOf('@') !== -1 &&
      inputPwValue.length >= 8 &&
      checkEng.test(inputPwValue) &&
      checkSpecial.test(inputPwValue) &&
      checkNumber.test(inputPwValue);

    this.setState({
      isBtnOn: isBtnActive,
    });
  };

  goToMain = e => {
    e.preventDefault();
    this.props.history.push('/main');
    fetch('http://localhost:3000', {
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
    const checkEng = /[a-z | A-Z]/;
    const checkSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const checkNumber = /[0-9]/;
    const { inputIdValue, inputPwValue } = this.state;
    return (
      <>
        <article className="Signin">
          <div className="subject">
            <h1>로그인</h1>
          </div>
          <div className="signinBox">
            <form>
              <SigninBox onChange={this.handleInput} />
              <div>
                <button
                  type="submit"
                  className="siginBtn"
                  disabled={
                    inputIdValue.indexOf('@') !== -1 &&
                    inputPwValue.length > 8 &&
                    checkEng.test(inputPwValue) &&
                    checkSpecial.test(inputPwValue) &&
                    checkNumber.test(inputPwValue)
                      ? ''
                      : 'disabled'
                  }
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </div>
              <div className="signup">
                <button className="signup">
                  <Link to="/Signup">회원가입</Link>
                </button>
              </div>
            </form>
          </div>
        </article>
      </>
    );
  }
}

export default withRouter(Signin);
