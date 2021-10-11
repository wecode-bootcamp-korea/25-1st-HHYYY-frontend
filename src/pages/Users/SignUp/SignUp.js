import React, { Component } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import './SignUp.scss';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <SignUpForm />
      </div>
    );
  }
}

export default withRouter(SignUp);
