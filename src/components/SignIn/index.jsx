import React, { useState } from 'react';
import TextField from '../TextField';
import Button from '../Button';
import Alert from '../Alert';

import PreLoaderGIF from '../../assets/images/pre-loader.gif';
import './index.scss';

const SignIn = ({
  handleClickSignIn,
  handleHideAlert,
  message,
  alertType,
  isSigning,
  showAlert,
}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function onSubmitSignInForm(e) {
    e.preventDefault();
    if (!emailValue || !passwordValue) return;

    handleClickSignIn(emailValue, passwordValue);
  }

  function isSignInButtonDisable() {
    if (!emailValue || !passwordValue) return true;
    return false;
  }

  return (
    <div className="sign-in-form">
      <Alert
        style={{ display: !showAlert ? 'none' : 'block' }}
        alertType={alertType}
        message={message}
        onClick={handleHideAlert}
      />
      <h4 className="display-3">Sign In</h4>
      <form onSubmit={onSubmitSignInForm}>
        <div className="form-group">
          <TextField
            onChange={e => setEmailValue(e.target.value)}
            value={emailValue}
            name="email-address"
            placeholder="Email address"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <TextField
            onChange={e => setPasswordValue(e.target.value)}
            value={passwordValue}
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <Button
            type="submit"
            className="sign-in-btn btn-block btn-primary"
            name="sign-in"
            disabled={!isSigning ? isSignInButtonDisable() : isSigning}
          >
            Sign In
            {isSigning && (
              <img src={PreLoaderGIF} className="pre-loader" alt="pre-loader" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
