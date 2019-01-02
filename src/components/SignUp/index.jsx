import React from 'react';
import TextField from '../TextField';
import Button from '../Button';

import './index.scss';

const SignUp = ({ handleEventSignUp }) => {
  return (
    <div className="container">
      <div className="sign-up-form">
        <form>
          <h4 className="display-4">Sign Up</h4>

          <div className="form-group">
            <TextField
              placeholder="Full Name"
              className="form-control"
              name="name"
            />
          </div>

          <div className="form-group">
            <TextField
              placeholder="Email Address"
              className="form-control"
              name="Email address"
            />
          </div>

          <div className="form-group">
            <TextField
              placeholder="Password"
              className="form-control"
              name="password"
            />
          </div>

          <div className="form-group">
            <TextField
              placeholder="Confirm password"
              className="form-control"
              name="confirm-password"
            />
          </div>

          <div className="form-group">
            <Button
              className="sign-up-btn btn-block btn-primary"
              name="sign-up"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
