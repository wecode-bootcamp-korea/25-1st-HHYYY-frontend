import React, { Component } from 'react';
import './SignUpForm.scss';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      isBtnEnabled: false,
      emailVal: '',
      memNmVal: '',
      memPwVal: '',
      memPwCheckVal: '',
      cellphoneVal: '',
      addressVal: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    this.handleFunction();
  };

  handleFunction = () => {
    const {
      emailVal,
      memNmVal,
      memPwVal,
      memPwCheckVal,
      cellphoneVal,
      addressVal,
    } = this.state;

    const checkEng = /[a-z|A-Z]/;
    const checkSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const checkNumber = /[0-9]/;

    const check =
      emailVal.includes('@') &&
      memPwVal.length >= 8 &&
      memPwVal === memPwCheckVal &&
      memPwVal.test(checkEng) &&
      memPwVal.test(checkSpecial) &&
      memPwVal.test(checkNumber) &&
      memNmVal &&
      addressVal &&
      cellphoneVal.length === 11;

    this.setState({ isBtnEnabled: check });
  };

  handleSignUp = () => {
    fetch('http://172.30.1.58:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.emailVal,
        password: this.state.memPwVal,
        phone_number: this.state.cellphoneVal,
        name: this.state.memNmVal,
        address: this.state.addressVal,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          alert('회원 가입을 축하드립니다.');
          this.props.history.push('/signin');
        } else {
          alert('정보를 확인해주세요');
        }
      });
  };

  render() {
    //회원가입 유효성 검사
    const {
      isBtnEnabled,
      emailVal,
      memNmVal,
      memPwVal,
      memPwCheckVal,
      cellphoneVal,
      addressVal,
    } = this.state;

    return (
      <div className="content">
        <div className="join">
          <div className="top">
            <h2>JOIN US</h2>
            <div className="process">
              <div className="this">정보입력</div>
              <div className="arrow">&gt;</div>
              <div className="next">가입완료</div>
            </div>
          </div>

          <div className="join-form">
            <form
              className="formJoin"
              name="formJoin"
              action="#"
              method="post"
              onSubmit={this.handleSubmit}
            >
              <div className="title">
                <h3>기본정보</h3>
                <p>
                  <i className="fas fa-square"></i> 표시는 반드시 입력하셔야
                  하는 항목입니다.
                </p>
              </div>

              <div className="filloutForm">
                <table>
                  <tbody>
                    <tr>
                      <th className="required">
                        <i className="fas fa-square"></i>이메일
                      </th>
                      <td className="txt-field">
                        <input
                          type="text"
                          className="text"
                          name="emailVal"
                          autoComplete="off"
                          value={emailVal}
                          onChange={this.handleInput}
                        ></input>
                        <div id="email-error" class="error">
                          이메일을 정확하게 입력해주세요.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th className="required">
                        <i className="fas fa-square"></i>비밀번호
                      </th>
                      <td className="txt-field">
                        <input
                          type="password"
                          className="text"
                          name="memPwVal"
                          autoComplete="off"
                          value={memPwVal}
                          onChange={this.handleInput}
                        ></input>
                        <div id="memPw-error" class="error">
                          최소 8 이상, 영문, 숫자, 특수문자만 입력하실 수
                          있습니다.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th className="required">
                        <i className="fas fa-square"></i>비밀번호 확인
                      </th>
                      <td className="txt-field">
                        <input
                          type="password"
                          className="text check-id"
                          name="memPwCheckVal"
                          autoComplete="off"
                          value={memPwCheckVal}
                          onChange={this.handleInput}
                        ></input>
                        <div id="memPwCheck-error" class="error">
                          비밀번호가 서로 다릅니다.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th className="required">
                        <i className="fas fa-square"></i>이름
                      </th>
                      <td className="txt-field">
                        <input
                          type="text"
                          className="text"
                          name="memNmVal"
                          value={memNmVal}
                          onChange={this.handleInput}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <th className="required">
                        <i className="fas fa-square"></i>휴대폰번호
                      </th>
                      <td className="txt-field">
                        <input
                          type="text"
                          className="text"
                          name="cellphoneVal"
                          maxLength="11"
                          placeholder="- 없이 입력하세요."
                          value={cellphoneVal}
                          onChange={this.handleInput}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <th className="notrequired">주소</th>
                      <td className="txt-field">
                        <input
                          type="text"
                          className="text"
                          name="addressVal"
                          value={addressVal}
                          onChange={this.handleInput}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn">
                <button
                  type="button"
                  className={isBtnEnabled ? 'activeBtn' : 'disableBtn'}
                  onClick={this.handleSignUp}
                >
                  <em>회원가입</em>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
