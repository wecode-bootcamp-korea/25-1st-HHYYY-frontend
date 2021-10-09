import React, { Component } from 'react';
import './SignUpForm.scss';

class SignUpForm extends Component {
  render() {
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
              onSubmit="this.handleSubmit"
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
                          name="email"
                          id="email"
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
                          name="memPw"
                          id="memPw"
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
                          name="memPwCheck"
                          id="memPwCheck"
                          autocomplete="off"
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
                          name="memNm"
                          id="memNm"
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
                          name="cellphone"
                          id="cellphone"
                          maxLength="11"
                          placeholder="- 없이 입력하세요."
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <th className="notrequired">주소</th>
                      <td className="txt-field">
                        <input
                          type="text"
                          className="text"
                          name="address"
                          id="address"
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn">
                <button type="submit" className="submit" value="회원가입">
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

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Essay:
//         <textarea value={this.state.value} onChange={this.handleChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
// }
