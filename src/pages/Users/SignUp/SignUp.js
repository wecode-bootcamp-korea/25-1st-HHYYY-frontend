import React, { Component } from 'react';
import SignupForm from './SignupForm/SignupForm';
import './Signup.scss';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <SignupForm />
      </div>
    );
  }
}

export default withRouter(Signup);
