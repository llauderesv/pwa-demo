import React from 'react';

import TextField from '../TextField';
import Button from '../Button';
import Alert from '../Alert';

import './index.scss';

const Login = ({ onClick, isLoading, errorMessage }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  return (
    <div className="login-container">
      {errorMessage && <Alert>{errorMessage}</Alert>}
      <form>
        <fieldset>
          <legend>Sign In</legend>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <TextField
              ref={emailRef}
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField
              ref={passwordRef}
              type="password"
              className="form-control"
              name="password"
            />
          </div>
          <Button
            style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}` }}
            disabled={`${isLoading ? 'disabled' : ''}`}
            className="btn btn-lg btn-primary btn-block"
            name="login"
            type="button"
            onClick={e => {
              e.preventDefault();
              onClick(emailRef.current.value, passwordRef.current.value);
            }}
          >
            Sign In
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
