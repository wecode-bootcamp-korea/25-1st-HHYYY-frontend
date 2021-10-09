import React, { Component } from 'react';
// import Header from '../../../components/Header/Header';
import SignUpForm from './SignUpForm/SignUpForm';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
